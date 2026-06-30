import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

import { Colors } from "../../theme";

type Props = {
  children: ReactNode;
};

export default function AtlasShell({
  children,
}: Props) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}