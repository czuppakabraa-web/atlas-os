import { View } from "react-native";

import AtlasShell from "@/components/layout/AtlasShell";
import SystemHeading from "@/components/system/SystemHeading";
import SystemStatus from "@/components/system/SystemStatus";

export default function ProfileScreen() {
  return (
    <AtlasShell>
      <View
        style={{
          flex: 1,
          padding: 24,
          justifyContent: "center",
        }}
      >
        <SystemHeading>
          IDENTITY
        </SystemHeading>

        <SystemStatus>
          [USR-0001]
        </SystemStatus>
      </View>
    </AtlasShell>
  );
}