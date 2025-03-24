import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ljvliuibtxxqwgkbfhcy.supabase.co';  // Supabase project URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqdmxpdWlidHh4cXdna2JmaGN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MzI2OTAsImV4cCI6MjA1ODMwODY5MH0.QfT57Gc_Ulm1n3DZNydDPZ7I-PaEW9UDKRY8hlE7R7M';  //Supabase API Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

//to export data from cycle history and user preference tables
export const getCycleHistory = async (userId) => {
    let { data, error } = await supabase
      .from("cycle_history")
      .select("*")
      .eq("user_id", userId);
}

//to save user preference to SupaBase

export const syncPreferencesToSupabase = async (userId, preferences) => {
    const { data, error } = await supabase
      .from('user_preferences')
      .upsert([{ user_id: userId, preferences }], { onConflict: ['user_id'] });
  
    if (error) {
      console.error('Error syncing preferences to Supabase:', error);
    } else {
      console.log('Preferences synced:', data);
    }
  };
