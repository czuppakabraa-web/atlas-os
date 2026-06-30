import { supabase } from "../lib/supabase";
import { Meal } from "../types/meal";

export async function getMealsByDate(
  date: Date
): Promise<Meal[]> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not found.");
  }

  const start = new Date(date);
  start.setHours(0, 0, 0, 0);

  const end = new Date(date);
  end.setHours(23, 59, 59, 999);

  const { data, error } = await supabase
    .from("meals")
    .select("*")
    .eq("user_id", user.id)
    .gte("created_at", start.toISOString())
    .lte("created_at", end.toISOString())
    .order("created_at", {
      ascending: true,
    });

  if (error) throw error;

  return data as Meal[];
}

export function calculateNutrition(meals: Meal[]) {
  return {
    calories: meals.reduce((sum, meal) => sum + meal.calories, 0),

    protein: meals.reduce(
      (sum, meal) => sum + Number(meal.protein),
      0
    ),

    carbs: meals.reduce(
      (sum, meal) => sum + Number(meal.carbs),
      0
    ),

    fat: meals.reduce(
      (sum, meal) => sum + Number(meal.fat),
      0
    ),
  };
}

export async function deleteMeal(id: string) {
  const { error } = await supabase
    .from("meals")
    .delete()
    .eq("id", id);

  if (error) throw error;
}