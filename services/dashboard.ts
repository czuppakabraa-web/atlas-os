import { getProfile } from "@/repositories/ProfileRepository";
import { getLatestWeight } from "@/repositories/WeightRepository";

import { calculateRemainingWeight } from "@/utils/health";

export async function getDashboard() {
  const profile = await getProfile();
  const latestWeight = await getLatestWeight();

  const currentWeight = latestWeight?.weight ?? null;
  const targetWeight = profile?.target_weight ?? null;

  return {
    profile,
    currentWeight,
    targetWeight,
    remainingWeight: calculateRemainingWeight(
      currentWeight,
      targetWeight
    ),
    calories: 0,
    protein: 0,
    steps: 0,
    workout: null,
  };
}