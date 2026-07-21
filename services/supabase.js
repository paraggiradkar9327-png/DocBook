import { createClient } from "@supabase/supabase-js";


const supabaseUrl = "https://qkjvyazqdfbypbwvidpg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFranZ5YXpxZGZieXBid3ZpZHBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MjQ5NTEsImV4cCI6MjEwMDIwMDk1MX0.0k9efD1aREYCb7gmZkpSHsFNJPBUYYxwZZ6Emg-GF_I";
;

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);