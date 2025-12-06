
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://riapkixyiaqcovspcime.supabase.co';
const supabaseAnonKey = 'sb_publishable_sn6chCL9iwzRkr0wz6nNjA_P-3Louvr';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
