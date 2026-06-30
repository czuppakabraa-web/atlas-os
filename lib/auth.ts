import { supabase } from "./supabase";

export async function signUp(email: string, password: string) {
  return await supabase.auth.signUp({
    email,
    password,
  });
}

export async function signIn(email: string, password: string) {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
}

export async function signOut() {
  return await supabase.auth.signOut();
}

export async function getUser() {
  return await supabase.auth.getUser();
}

export async function requireUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Brak użytkownika.");
  }

  return user;
}

export async function ensureProfile() {
  const user = await requireUser();

  // sprawdź czy profil istnieje
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profile) {
    return profile;
  }

  // utwórz profil jeśli go nie ma
  const { data: newProfile, error } = await supabase
    .from("profiles")
    .insert({
      id: user.id,
    })
    .select()
    .single();

  if (error) throw error;

  return newProfile;
}