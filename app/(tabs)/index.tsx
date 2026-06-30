import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import { bootstrap } from "@/services/bootstrapService";

export default function Index() {
  useEffect(() => {
    async function initialize() {
      const route = await bootstrap();

      router.replace(route as any);
    }

    initialize();
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
      <ActivityIndicator
        size="large"
        color="white"
      />
    </View>
  );
}