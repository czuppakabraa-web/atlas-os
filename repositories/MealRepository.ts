import { supabase } from "@/lib/supabase";

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

  if (!user) {
    throw new Error("Brak użytkownika.");
  }

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

export async function getTodayMeals() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Brak użytkownika.");
  }

  const { data, error } = await supabase
    .from("meals")
    .select("*")
    .eq("user_id", user.id)
    .gte("created_at", today.toISOString())
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data ?? [];
}