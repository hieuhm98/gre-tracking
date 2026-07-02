# Decoupling – SQS, SNS, Kinesis & Amazon MQ

Decoupling is a core principle in AWS architecture: instead of components calling each other directly, we insert a messaging layer (queue, pub/sub, streaming) in between. This makes the system more fault-tolerant, lets components scale independently, and prevents cascading failures when one tier is overloaded.

## 1. Overview

**Why decouple?**

- **Loose coupling**: producers and consumers don't need to know each other's address or state; they communicate only through an intermediate layer.
- **Resilience**: if a consumer dies, messages stay in the queue and are reprocessed once the consumer recovers — no data loss.
- **Scaling**: producers and consumers scale independently; when load rises, you simply add more consumers reading from the queue.

**The 4 core services and their exam positioning:**

- **SQS** — a queue for decoupling; each message is processed by **one** consumer and then deleted.
- **SNS** — pub/sub fan-out; **each** subscriber receives **a copy** of the message.
- **Kinesis Data Streams** — real-time streaming, supports **replay** and **multiple consumers** reading the same data.
- **Kinesis Data Firehose** — loads streaming data into storage (S3/Redshift/OpenSearch/Splunk), **no replay**.
- **Amazon MQ** — managed message broker (ActiveMQ/RabbitMQ) to **migrate** legacy apps using standard AMQP/MQTT/JMS/STOMP.

## 2. Amazon SQS: Standard vs FIFO

SQS (Simple Queue Service) is a fully managed message queue. A **producer** sends messages into the queue, a **consumer** polls messages out to process them, then calls `DeleteMessage`. Max message size is `256KB`; for larger payloads use S3 + the **SQS Extended Client Library** (store the payload in S3, keep only a reference in the message).

| Criteria | Standard Queue | FIFO Queue |
|---|---|---|
| Throughput | Nearly unlimited | Up to 300 msg/s (3000 msg/s with batching) |
| Ordering | Best-effort (not guaranteed) | Guaranteed in order (FIFO) |
| Delivery | At-least-once (may duplicate) | Exactly-once processing |
| Duplicates | Possible duplicates | Deduplication |
| Queue name | Any | Must end in `.fifo` |

Choose **FIFO** when you need **strict ordering** and **no duplicates** (e.g., financial transactions, commands that must be processed in sequence). Choose **Standard** when you need extremely high throughput and ordering doesn't matter.

## 3. SQS: Key Concepts

- **`visibility timeout`** (default `30s`): when a consumer receives a message, it is hidden from other consumers for this period. If the consumer finishes and calls `DeleteMessage` in time, the message disappears; if it is **not deleted in time**, the message **reappears** and may be processed a second time (double processing). Tune the timeout to be long enough to avoid duplicate processing.
- **`DLQ` (Dead Letter Queue)**: messages that fail processing too many times (exceeding `maxReceiveCount`) are moved to a separate queue for analysis, keeping the main queue unclogged. This is how you handle **poison messages**. You can use **redrive** to push messages from the DLQ back to the source queue after fixing the bug.
- **`long polling` vs `short polling`**: long polling (`ReceiveMessageWaitTimeSeconds` up to `20s`) waits until a message arrives or the time expires, **reducing empty responses and API cost**. Short polling replies immediately even when the queue is empty, causing many wasteful calls.
- **Delay queue**: postpones a message's visibility to consumers for a period (up to 15 minutes) after it is sent.
- **Message retention**: default 4 days, configurable up to `14 days`.

## 4. SQS + Auto Scaling

SQS combined with Auto Scaling automatically adjusts the number of consumers based on **queue depth**. Use the CloudWatch metric `ApproximateNumberOfMessagesVisible` (number of waiting messages) as the basis for a scaling policy:

- When the backlog grows → scale out (add EC2 instances/consumers to process faster).
- When the queue drains → scale in (remove instances to save cost).

This is the classic pattern for decoupling application tiers: the web tier pushes jobs into SQS, and the worker tier (in an Auto Scaling Group) scales up and down with real load.

## 5. Amazon SNS: Pub/Sub

SNS (Simple Notification Service) is a **pub/sub** service. A producer publishes a message to a **topic**; SNS pushes the message to **all subscribers** of that topic. Max message size is `256KB`.

**Supported subscriber types:**

- SQS queue
- AWS Lambda
- HTTP/HTTPS endpoint
- Email / Email-JSON
- SMS (text messages)
- Kinesis Data Firehose

**Message filtering**: assign a **filter policy** (JSON) to each subscription so a subscriber only receives messages with matching attributes — e.g., only orders where "region": "us-east-1". This routes messages without needing many topics.

**SNS FIFO**: combine with **SQS FIFO** to preserve ordering and deduplication in fan-out patterns that require ordering.

## 6. Fan-out Pattern (SNS → multiple SQS)

Fan-out is a pattern where **one** message is sent to an SNS topic, and the topic pushes **a copy** to **multiple** subscribed SQS queues at once — each queue receives its own full copy.

Advantages:

- Adding a new consumer just means creating another SQS queue subscribed to the topic, with no producer changes.
- Each queue can have its own processing rate, retention, and DLQ.
- Durable delivery is guaranteed (messages wait in SQS for processing).

**Typical use case**: an S3 event (`S3 event`) → SNS topic → multiple SQS queues (one queue creates thumbnails, one indexes, one writes logs...). A single image upload triggers several independent processing pipelines in parallel.

## 7. Kinesis Data Streams

Kinesis Data Streams is a **real-time streaming** service for large, continuous data (clickstreams, IoT, logs, metrics).

- **Shard**: the unit of throughput; a stream consists of multiple shards, each with its own read/write limits. Add shards to increase throughput.
- **Ordering**: guaranteed **per `partition key`** (records with the same partition key go to the same shard and keep their order).
- **Retention**: default `1 day`, configurable up to `365 days` — enabling **replay** of data.
- **Multiple consumers**: several applications can read the **same** data independently (unlike SQS, where a message is consumed by one consumer).
- **Replay**: consumers can re-read older data within the retention window.
- **Capacity mode**: **Provisioned** (you declare the shard count, controlling cost) or **On-demand** (auto-scales with load).

## 8. Kinesis Data Firehose

Firehose is a **near-real-time** (buffered), **fully managed** service used to **load streaming data into storage**.

- Destinations: **S3, Redshift, OpenSearch, Splunk** (and some third-party HTTP endpoints).
- Can **transform** data with **Lambda** before writing (format conversion, enrichment).
- **No shards**, no capacity to manage — fully automatic.
- **No replay**: data is delivered to the destination and that's it; nothing is kept for re-reading.
- Buffers by size or time (buffer size/interval), so there is slight latency (near-real-time).

## 9. Kinesis Data Streams vs Firehose

| Criteria | Kinesis Data Streams | Kinesis Data Firehose |
|---|---|---|
| Latency | Real-time (~200ms) | Near-real-time (buffered) |
| Management | You manage shards | Fully managed, no shards |
| Replay | Yes (up to 365 days) | No |
| Multiple consumers | Yes | No (delivers to a destination only) |
| Destination | Consumer processes it | S3 / Redshift / OpenSearch / Splunk |
| Transform | Done by the consumer | Built-in Lambda |
| Use case | Stream processing, real-time analytics | Load streams into storage/DW |

Quick recall: need **replay / multiple consumers / real-time processing** → **Data Streams**; need to simply **land streaming data into S3/Redshift** with no re-reading → **Firehose**.

## 10. Amazon MQ

Amazon MQ is a **managed message broker** for **ActiveMQ** and **RabbitMQ**. It speaks industry-standard protocols: **AMQP, MQTT, STOMP, JMS, OpenWire, WebSocket**.

- **For lift-and-shift**: when migrating on-premises applications that already use standard messaging protocols to AWS **without rewriting code** to use the SQS/SNS APIs.
- **Not for new cloud-native apps**: if building new on AWS, prefer **SQS/SNS** (better scaling, serverless, no broker to manage).
- Runs on broker instances (can be multi-AZ for HA), so it requires more capacity management than serverless SQS/SNS.

## 11. SQS vs SNS vs Kinesis vs MQ

| Criteria | SQS | SNS | Kinesis Data Streams | Amazon MQ |
|---|---|---|---|---|
| Model | Queue (point-to-point) | Pub/sub (fan-out) | Streaming | Broker (protocol standards) |
| Who gets the message | One consumer/message | Each subscriber a copy | Multiple consumers read same data | Per broker config |
| Replay | No | No | Yes (retention up to 365 days) | No (broker-dependent) |
| Ordering | FIFO queue | SNS FIFO | Per partition key | Broker-dependent |
| Main use case | Decouple, buffer jobs | Notifications, fan-out | Real-time analytics, streaming | Migrate legacy AMQP/MQTT apps |
| Serverless | Yes | Yes | Yes (managed) | No (broker instance) |

## Key exam points

- **SQS = queue/decouple**, each message processed by **one** consumer then deleted; **SNS = pub/sub fan-out**, **each** subscriber receives **a copy**.
- **Kinesis Data Streams** = real-time + **replay** + **multiple consumers** reading the same data; **Firehose** = load streaming into **S3/Redshift/OpenSearch/Splunk**, **no replay**, **no shards**.
- **FIFO queue** (name ends in `.fifo`) when you need **strict ordering** + **exactly-once/dedup**; Standard for high throughput, best-effort ordering.
- **`visibility timeout`**: if you don't `DeleteMessage` in time, the message reappears → **duplicate processing**; tune it to avoid double processing.
- **`DLQ`** to isolate **poison messages** (repeated failures); **redrive** pushes them back after a fix.
- **`long polling`** (`ReceiveMessageWaitTimeSeconds` up to `20s`) reduces empty receives and cost versus short polling.
- **Fan-out**: SNS → multiple SQS queues, each queue gets a copy (classic: S3 event → SNS → multiple SQS).
- **SNS message filtering** (filter policy) so each subscriber only receives messages matching attributes.
- **Auto Scaling** consumers based on `ApproximateNumberOfMessagesVisible` (queue depth).
- **Amazon MQ** to **migrate** legacy apps using **AMQP/MQTT/JMS/STOMP**; new cloud-native apps use SQS/SNS.
- Message **> `256KB`** → use **S3 + SQS Extended Client**.

## Summary

- Decouple to gain loose coupling, resilience, and independent scaling between producers and consumers.
- SQS is a queue (one consumer/message); Standard = high throughput best-effort, FIFO = strict ordering + dedup, name must end in `.fifo`.
- Master `visibility timeout` (avoid duplicate processing), `DLQ` (poison messages), `long polling` (reduce cost), and Auto Scaling on queue depth.
- SNS is pub/sub fan-out with message filtering; SNS → multiple SQS is the classic fan-out pattern (S3 event).
- Kinesis Data Streams for real-time + replay + multiple consumers; Firehose loads streaming into storage, no replay, no shards.
- Use Amazon MQ only to migrate legacy apps on AMQP/MQTT/JMS standards; new AWS systems prefer SQS/SNS.
