import { View } from "react-native";

import AtlasShell from "@/components/layout/AtlasShell";
import SystemHeading from "@/components/system/SystemHeading";

export default function Screen() {
  return (
    <AtlasShell>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SystemHeading>
          MODULE
        </SystemHeading>
      </View>
    </AtlasShell>
  );
}