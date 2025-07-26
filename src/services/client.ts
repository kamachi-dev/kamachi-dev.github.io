import { createClient, SupabaseClient } from '@supabase/supabase-js';

export const supabase: SupabaseClient = createClient(
    //import.meta.env.VITE_SUPABASE_URL!,
    //import.meta.env.VITE_SUPABASE_ANON_KEY!
    'https://psgbsjzcgadniqruofak.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzZ2JzanpjZ2FkbmlxcnVvZmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxMjY3MjMsImV4cCI6MjA2NzcwMjcyM30.3dQNRkUIwXLaDy-J98dcRjOKWEYipVixAvMTw2PZDT8'
)