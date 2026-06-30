import { ensureProfile, getUser } from "@/lib/auth";

export async function bootstrap() {
  const { data } = await getUser();

  if (!data.user) {
    return "/auth/login";
  }

  await ensureProfile();

  return "/home";
}