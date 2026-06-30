import { getTodayMeals } from "@/repositories/MealRepository";
import { getDashboard } from "./dashboard";

export async function getOverview() {
  const dashboard = await getDashboard();

  const meals = await getTodayMeals();

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