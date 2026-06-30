import { supabase } from "../lib/supabase";

export async function analyzeMeal(meal: string) {
  const { data, error } = await supabase.functions.invoke(
    "analyze-meal",
    {
      body: {
        meal,
      },
    }
  );

  if (error) throw error;

  return data;
}