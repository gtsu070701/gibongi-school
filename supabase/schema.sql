-- Run this in the Supabase project's SQL editor.
-- Email-only auth (magic link / OTP): auth.jwt() ->> 'email' identifies the caller.

create table if not exists profiles (
  email text primary key,
  created_at timestamptz not null default now()
);

create table if not exists attempts (
  id uuid primary key default gen_random_uuid(),
  email text not null references profiles(email) on delete cascade,
  course_key text not null, -- e.g. 'math-basic/50days'
  score integer not null,
  total integer not null,
  answers jsonb not null,
  completed_at timestamptz not null default now()
);

alter table profiles enable row level security;
alter table attempts enable row level security;

create policy "profiles: self read/write" on profiles
  for all
  using (auth.jwt() ->> 'email' = email)
  with check (auth.jwt() ->> 'email' = email);

create policy "attempts: self read/write" on attempts
  for all
  using (auth.jwt() ->> 'email' = email)
  with check (auth.jwt() ->> 'email' = email);
