import {
    getProfile,
    updateProfile,
} from "@/repositories/ProfileRepository";

export async function loadProfile() {
  return await getProfile();
}

export async function saveProfile(data: {
  fullName: string;
  height: string;
  targetWeight: string;
}) {
  const fullName = data.fullName.trim();

  const height = Number(data.height);
  const targetWeight = Number(data.targetWeight.replace(",", "."));

  if (!fullName) {
    throw new Error("Podaj imię i nazwisko.");
  }

  if (Number.isNaN(height) || height <= 0) {
    throw new Error("Nieprawidłowy wzrost.");
  }

  if (Number.isNaN(targetWeight) || targetWeight <= 0) {
    throw new Error("Nieprawidłowa waga docelowa.");
  }

  await updateProfile({
    full_name: fullName,
    height_cm: height,
    target_weight: targetWeight,
  });
}