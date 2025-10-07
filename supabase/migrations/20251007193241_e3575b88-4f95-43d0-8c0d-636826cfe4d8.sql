-- Enable required extensions for cron jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Schedule the keep-alive function to run every day at 3 AM UTC
SELECT cron.schedule(
  'keep-database-active',
  '0 3 * * *',
  $$
  SELECT
    net.http_post(
      url:='https://cwaqkgxmpoxjjosdbjav.supabase.co/functions/v1/keep-alive',
      headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3YXFrZ3htcG94ampvc2RiamF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NTcxNjIsImV4cCI6MjA3MzQzMzE2Mn0.MqH8WbYPPIDGtgwoqo-9lFvIL8o7uNyOry5j7qxNvic"}'::jsonb,
      body:=concat('{"timestamp": "', now(), '"}')::jsonb
    ) as request_id;
  $$
);
