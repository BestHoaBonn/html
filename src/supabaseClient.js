
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = " https://wszzmkwzqojrkzpsgzwq.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indzenpta3d6cW9qcmt6cHNnendxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MTcyNjY2NiwiZXhwIjoyMDc3MzAyNjY2fQ.KfS9G-4ibR66BoSAjRBG7ZizY_0zlZABKqrKnW6IxMk";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
