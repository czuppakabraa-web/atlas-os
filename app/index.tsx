import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { router } from "expo-router";
import { getUser, ensureProfile } from "../lib/auth";

export default function Index() {
  useEffect(() => {
    async function checkSession() {
      const { data } = await getUser();

      if (data.user) {
        await ensureProfile();
        router.replace("/home");
      } else {
        router.replace("/auth/login");
      }
    }

    checkSession();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111827",
      }}
    >
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}