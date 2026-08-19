# AI in the BA's Work

## 1. What AI changes and what it does NOT

> **AI dramatically changes how a BA PRODUCES work products. It barely changes the core: understanding the business problem and building shared understanding among the people involved.**

**What AI does very well:**

- **Drafting a first version** — user stories, acceptance criteria, process descriptions, meeting minutes.
- **Converting formats** — turning messy notes into structure, tables into prose and back.
- **Generating test cases** from a requirement, including exception cases you might have missed.
- **Synthesising and summarising** long documents, support logs, customer feedback.
- **Playing devil's advocate** — *"what cases have I not considered?"*
- **Translating and polishing language**, especially useful when working with overseas customers.

**What AI CANNOT do:**

- **Know your organizational context** — who holds authority, which departments are in conflict, which internal policies apply.
- **Observe users doing real work** and notice the gap between the documented and the actual process.
- **Build trust** with stakeholders so they say what really worries them.
- **Be accountable** for a decision.
- **Know what is being hidden** — something only experience and relationships reveal.

> **The pragmatic conclusion: AI makes the drafting far faster, but the hardest part of the craft — knowing what to ask and whom to ask — remains human.**

---

## 2. Using AI across the BA's tasks

**Elicitation.** Before an interview, ask AI to list the questions worth asking for a type of feature. **Do not use that list as-is** — filter it for context and add the questions only you know to ask.

**Analysis.** Give AI a process description and ask: *"Which steps lack an exception branch?"*, *"Which combinations of conditions are unaddressed?"* AI is quite good at **spotting logical gaps**.

**Specification.** Have AI draft user stories and acceptance criteria from your notes, then **rewrite them for the real context**. Speed rises substantially, but the final quality still depends on you.

**Testing.** Give it one acceptance criterion and ask for a list of test cases, especially boundary and exception cases. **This is among the highest-value applications.**

**Documentation and communication.** Summarising minutes, rewriting a passage for clarity, translating, and adjusting tone for a specific audience.

> **The general rule: use AI to produce DRAFTS and to CHALLENGE your work, not to produce final output.** Drafts get you past the blank page; challenge helps you find what you missed.

---

## 3. Three development models in the AI era

How teams build software is shifting, and BAs need to understand three emerging models.

### Vibe coding

**Developers describe what they want in natural language and let AI generate code**, then try, fix, and iterate rapidly.

- **Strong for:** very fast prototypes, exploring ideas, non-critical parts.
- **Risks:** generated code can be inconsistent, hard to maintain, and **nobody truly understands what it does** — a new form of technical debt.
- **For a BA:** extremely useful for **testing an idea with users in hours rather than weeks**. But do not let that prototype get pushed into production — this is the old throwaway-prototype trap at larger scale.

### Spec-driven development

**The specification becomes the primary input for generating code.** You write a sufficiently precise spec, AI generates code and tests from it, and the spec is maintained as the source of truth.

- **For a BA this is the most consequential model:** **specification quality directly determines product quality**, more visibly than ever.
- It turns classic BA skills — precise writing, covering exceptions, avoiding ambiguity — into **the deciding factor** rather than a nice-to-have.

### AI-DLC (AI-driven development life cycle)

**AI participates in every phase**: suggesting requirements from usage data, generating code and tests, reviewing code, monitoring operations, and proposing improvements.

- **For a BA:** the role shifts from *specification writer* to **validator and decision-maker** — checking whether what AI proposes matches the real business need.

> **What all three share: they make PRODUCING software cheaper, so the expensive part left is knowing WHAT to produce. That is the BA's work.**

---

## 4. Risks when using AI in BA work

**1. Hallucination.** AI can produce plausible-sounding but entirely false information — a regulation that does not exist, an invented figure, a fictitious industry practice.

- **Guard:** **never put AI-sourced information into a document without verifying it**, especially numbers, legal requirements, and technical names.

**2. Data leakage.** Pasting requirements, customer data, or internal information into a public AI tool can **breach confidentiality agreements and data regulations**.

- **Guard:** know your company's policy; mask or remove sensitive data before pasting; prefer enterprise-approved tools.

**3. Loss of thinking depth.** If AI always drafts and you only edit, you **may stop asking the hard questions yourself**. Analytical skill atrophies from disuse.

- **Guard:** for the most important parts, **think it through yourself first, then ask AI to compare**. That order keeps your thinking sharp.

**4. Homogenisation.** AI tends to produce average, generic content. An AI-written specification may **lack precisely the distinctive details** that make your system valuable.

**5. Misplaced trust.** Because AI writes fluently, readers assume the content has been verified. **Fluency is not evidence of correctness.**

> **The accountability principle: your name is on the document, so you are responsible for every sentence in it — including the ones AI wrote.**

---

## 5. Writing effective prompts for BA work

Output quality depends heavily on how you ask. **Four components of a good prompt:**

**1. Role and context.** *"You are a BA for a warehouse management system at a Vietnamese retail company."*

**2. Concrete input.** Paste the actual notes, process description, or requirement rather than describing them generally.

**3. Desired output format.** *"Return a table with columns: requirement ID, description, acceptance criteria, exception cases."*

**4. Constraints and quality criteria.** *"Every acceptance criterion must be verifiable and must cover at least one failure case."*

**The three most useful prompts for a BA:**

- **Challenge:** *"Read this requirement and list every different way a developer could interpret it."*
- **Find gaps:** *"For this process, which exception situations are not addressed?"*
- **Generate tests:** *"From this acceptance criterion, list the test cases including boundary and failure cases."*

> **The most effective prompt is usually not asking AI to write for you but asking it to FIND FAULTS in what you wrote.** That uses AI as an always-available reviewer rather than a ghostwriter.

---

## 6. How the BA role shifts

**Parts of the job that shrink:**

- Drafting documents from scratch.
- Converting formats by hand.
- Writing meeting minutes.
- Looking up basic information.

**Parts that become more important:**

- **Knowing what to ask and whom to ask.** AI does not know who in your organization holds which information.
- **Validating and deciding.** As producing content gets cheap, judging which content is correct becomes relatively more expensive.
- **Building relationships and trust.** People voice their real concerns to humans, not to tools.
- **Understanding organizational context.** Internal politics, project history, unwritten constraints.
- **Being accountable.** Somebody must stand behind a decision, and that cannot be a tool.

> **A useful framing: AI makes a good BA far more effective, but it does not turn someone who does not know what to ask into a BA.** It amplifies existing capability rather than creating new capability.

---

## 7. Key takeaways

- **AI changes how a BA produces work products but barely changes the core** of understanding problems and building shared understanding.
- AI does well: **drafting, converting formats, generating test cases, synthesising, challenging, translating**.
- AI cannot: **know your organizational context, observe real users, build trust, be accountable, know what is hidden**.
- **Use AI for DRAFTS and to CHALLENGE, not to produce final output.**
- **Vibe coding** builds prototypes very fast but produces hard-to-maintain code nobody truly understands.
- Vibe-coded prototypes **must not be pushed into production** — the old throwaway-prototype trap at larger scale.
- **Spec-driven development makes specification quality directly determine product quality** — classic BA skills become the deciding factor.
- In **AI-DLC**, the BA role shifts from specification writer to **validator and decision-maker**.
- All three models make **producing software cheaper**, leaving **knowing what to produce** as the expensive part.
- **Never put AI-sourced information into a document unverified**, especially numbers and legal requirements.
- **Pasting customer data into public AI tools can breach confidentiality agreements.**
- If AI always drafts and you only edit, **analytical skill atrophies from disuse**.
- For the most important parts, **think it through first, then ask AI to compare**.
- **Fluency is not evidence of correctness.**
- **Your name is on the document, so you own every sentence**, including AI-written ones.
- A good prompt has four parts: **role and context, concrete input, output format, quality constraints**.
- **The most effective prompt is asking AI to FIND FAULTS in your work**, not to write it.
- **AI amplifies existing capability rather than creating new capability** — it will not make a BA out of someone who does not know what to ask.

## 8. Summary

- AI makes **drafting far faster**, but the hardest part — knowing what to ask and whom to ask — remains human.
- The three emerging models — **vibe coding, spec-driven, AI-DLC** — all raise the value of precise specification and correct validation.
- **The main risks are hallucination, data leakage, loss of thinking depth, and misplaced trust** — each with a specific guard.
- The most effective way for a BA to use AI is **as an always-available reviewer**, not as a ghostwriter.
