import { createClient } from "@supabase/supabase-js";
import privateVar from "./private";

const supabase = createClient(
  privateVar.REACT_APP_SUPABASE_URL,
  privateVar.REACT_APP_SUPABASE_KEY,
);

export default supabase;
