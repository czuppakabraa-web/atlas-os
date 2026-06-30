import { supabase } from "@/lib/supabase";

export async function saveWeight(weight: number) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Użytkownik nie jest zalogowany.");
  }

  const { error } = await supabase.from("weights").insert({
    profile_id: user.id,
    weight,
  });

  if (error) throw error;
}

export async function getLatestWeight() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Użytkownik nie jest zalogowany.");
  }

  const { data, error } = await supabase
    .from("weights")
    .select("*")
    .eq("profile_id", user.id)
    .order("measured_at", { ascending: false })
    .limit(1);

  if (error) throw error;

  return data?.[0] ?? null;
}

export async function getWeights(limit = 30) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Użytkownik nie jest zalogowany.");
  }

  const { data, error } = await supabase
    .from("weights")
    .select("*")
    .eq("profile_id", user.id)
    .order("measured_at", { ascending: false })
    .limit(limit);

  if (error) throw error;

  return data ?? [];
}