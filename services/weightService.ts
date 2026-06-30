import { saveWeight } from "@/repositories/WeightRepository";

export async function saveUserWeight(weight: string) {
  const value = weight.trim();

  if (!value) {
    throw new Error("Podaj wagę.");
  }

  const parsed = Number(value.replace(",", "."));

  if (Number.isNaN(parsed) || parsed <= 0) {
    throw new Error("Nieprawidłowa waga.");
  }

  await saveWeight(parsed);
}