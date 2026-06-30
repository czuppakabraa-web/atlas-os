import { supabase } from "./supabase";
import { getUser } from "./auth";

export async function getProfile() {
  const { data } = await getUser();

  if (!data.user) return null;

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  if (error) throw error;

  return profile;
}

export async function updateProfile(values: {
  full_name?: string;
  birth_date?: string;
  sex?: string;
  height_cm?: number;
  target_weight?: number;
  activity_level?: string;
  goal?: string;
}) {
  const { data } = await getUser();

  if (!data.user) {
    throw new Error("Brak użytkownika.");
  }

  const { error } = await supabase
    .from("profiles")
    .update(values)
    .eq("id", data.user.id);

  if (error) throw error;
}