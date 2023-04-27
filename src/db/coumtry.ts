import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://baoddioyjujzdkqeinhe.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhb2RkaW95anVqemRrcWVpbmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyMzI0MTcsImV4cCI6MTk5NzgwODQxN30.gXD4kzjDjvn08e5g6VZPHqGHk6bSIzCElzBaLvekjVw',
);

export default supabase;
