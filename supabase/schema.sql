-- Run this in your Supabase project: Dashboard → SQL Editor → New query

-- Daily study logs
create table public.daily_logs (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  date        date not null,
  pages_read  integer default 0,
  vocab_count integer default 0,
  notes       text,
  created_at  timestamptz default now(),
  unique (user_id, date)  -- one entry per user per day
);

-- Mock exam results
create table public.mock_exams (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  date        date not null,
  exam_name   text,
  score       numeric(5,2) not null,  -- percentage 0-100
  error_log   jsonb,                   -- { "verbal": 3, "quant": 5, ... }
  notes       text,
  created_at  timestamptz default now()
);

-- Sprint / phase milestone completions
create table public.milestones (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  sprint       text not null,           -- e.g. "1.1", "phase2"
  kpi_name     text not null,
  completed_at timestamptz default now(),
  unique (user_id, sprint, kpi_name)
);

-- Row Level Security: users can only access their own data
alter table public.daily_logs  enable row level security;
alter table public.mock_exams  enable row level security;
alter table public.milestones  enable row level security;

create policy "own data" on public.daily_logs  for all using (auth.uid() = user_id);
create policy "own data" on public.mock_exams  for all using (auth.uid() = user_id);
create policy "own data" on public.milestones  for all using (auth.uid() = user_id);

-- ─────────────────────────────────────────────
-- Knowledge base tables
-- ─────────────────────────────────────────────

-- User-created articles (public to all authenticated users)
create table public.knowledge_articles (
  id          uuid primary key default gen_random_uuid(),
  author_id   uuid not null references auth.users(id) on delete cascade,
  slug        text unique not null,
  title       text not null,
  content     text not null,
  source_file text,                    -- Supabase Storage path if uploaded
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- User-added questions (can attach to static OR user-created articles by slug)
create table public.knowledge_questions (
  id          uuid primary key default gen_random_uuid(),
  author_id   uuid not null references auth.users(id) on delete cascade,
  topic_slug  text not null,
  question    text not null,
  options     jsonb not null,          -- ["option A", "option B", ...]
  answer      integer not null,        -- index into options array
  explanation text,
  created_at  timestamptz default now()
);

alter table public.knowledge_articles  enable row level security;
alter table public.knowledge_questions enable row level security;

-- All authenticated users can read; only author can write
create policy "read all articles"    on public.knowledge_articles  for select using (auth.uid() is not null);
create policy "own article write"    on public.knowledge_articles  for all    using (auth.uid() = author_id);
create policy "read all questions"   on public.knowledge_questions for select using (auth.uid() is not null);
create policy "own question write"   on public.knowledge_questions for all    using (auth.uid() = author_id);
