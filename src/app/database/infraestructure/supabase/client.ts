import {createClient} from '@supabase/supabase-js';
import {supabaseUrl, supabaseKey} from '@/app/database/infraestructure/config/env.ts';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;