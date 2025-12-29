import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || import.meta.env.VITE_PUBLIC_SUPABASE_URL || '';
const supabaseKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY || '';

// If variables are missing, use placeholders to prevent build-time crashes.
// Form submission will still fail in production if these are not set in Netlify.
const finalUrl = supabaseUrl || 'https://placeholder.supabase.co';
const finalKey = supabaseKey || 'placeholder';

if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase environment variables are missing. Form submission will fail in production until they are set in Netlify settings.');
}

export const supabase = createClient(finalUrl, finalKey);
