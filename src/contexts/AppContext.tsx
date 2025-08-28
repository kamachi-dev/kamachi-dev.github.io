import { createContext } from "react";
import type { User } from "@supabase/supabase-js";

export const AppContext = createContext<{
    user: User | null,
}>({
    user: null,
});