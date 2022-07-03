import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.SUPABASE_ENDPOINT, process.env.SUPABASE_ANON_KEY);

export default supabase;
