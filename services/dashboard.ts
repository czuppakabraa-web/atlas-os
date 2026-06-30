import { getLatestWeight } from "../lib/weights";
import { getProfile } from "../lib/profile";

export async function getDashboard() {
  const profile = await getProfile();
  const latestWeight = await getLatestWeight();

  const currentWeight = latestWeight?.weight ?? null;
  const targetWeight = profile?.target_weight ?? null;

  let remainingWeight = null;

  if (currentWeight && targetWeight) {
    remainingWeight = Number(
      Math.abs(currentWeight - targetWeight).toFixed(1)
    );
  }

  return {
    profile,
    currentWeight,
    targetWeight,
    remainingWeight,
    calories: 0,
    protein: 0,
    steps: 0,
    workout: null,
  };
}