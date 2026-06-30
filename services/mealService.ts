import { saveMeal } from "@/repositories/MealRepository";
import { analyzeMeal } from "./ai";

export async function analyzeAndSaveMeal(description: string) {
  const meal = description.trim();

  if (!meal) {
    throw new Error("Opisz swój posiłek.");
  }

  const result = await analyzeMeal(meal);

  await saveMeal({
    description: meal,
    calories: result.calories,
    protein: result.protein,
    carbs: result.carbs,
    fat: result.fat,
  });

  return result;
}