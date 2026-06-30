import { getDashboard } from "./dashboard";
import { supabase } from "../lib/supabase";

export async function getOverview() {
  const dashboard = await getDashboard();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not found.");
  }

  const { data: meals, error } = await supabase
    .from("meals")
    .select("*")
    .eq("user_id", user.id)
    .gte("created_at", today.toISOString());

  if (error) throw error;

  const totals = meals.reduce(
    (acc, meal) => {
      acc.calories += meal.calories;
      acc.protein += Number(meal.protein);
      acc.carbs += Number(meal.carbs);
      acc.fat += Number(meal.fat);

      return acc;
    },
    {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    }
  );

  return {
    profile: dashboard.profile,
    currentWeight: dashboard.currentWeight,
    targetWeight: dashboard.targetWeight,

    totals,

    meals,
  };
}