import { ReactNode } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AtlasNavigator from "@/components/navigator/AtlasNavigator";

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

        <AtlasNavigator />
      </View>
    </SafeAreaView>
  );
}