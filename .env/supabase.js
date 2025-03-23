import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ljvliuibtxxqwgkbfhcy.supabase.co';  // Supabase project URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqdmxpdWlidHh4cXdna2JmaGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MzI2OTAsImV4cCI6MjA1ODMwODY5MH0.QfT57Gc_Ulm1n3DZNydDPZ7I-PaEW9UDKRY8hlE7R7M';  //Supabase API Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
