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
