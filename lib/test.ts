import { supabase } from "./supabase";

export async function testConnection() {
  const { data, error } = await supabase
    .from("profiles")
    .select("*");

  return {
    data: data ?? [],
    error,
  };
}