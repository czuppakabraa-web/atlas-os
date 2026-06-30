import { supabase } from "./supabase";

export async function saveMeal(meal: {
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("Brak użytkownika.");

  const { error } = await supabase.from("meals").insert({
    user_id: user.id,
    description: meal.description,
    calories: meal.calories,
    protein: meal.protein,
    carbs: meal.carbs,
    fat: meal.fat,
  });

  if (error) throw error;
}