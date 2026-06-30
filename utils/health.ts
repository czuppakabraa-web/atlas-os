export function calculateRemainingWeight(
  currentWeight: number | null,
  targetWeight: number | null
): number | null {
  if (currentWeight === null || targetWeight === null) {
    return null;
  }

  return Number(
    Math.abs(currentWeight - targetWeight).toFixed(1)
  );
}