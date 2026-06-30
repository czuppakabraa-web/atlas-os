import { ReactNode } from "react";
import { View } from "react-native";

import { Colors, Spacing } from "../../theme";

type Props = {
  children: ReactNode;
};

export default function Panel({ children }: Props) {
  return (
    <View
      style={{
        backgroundColor: Colors.surface,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 22,
        padding: Spacing.lg,
        marginBottom: Spacing.lg,
      }}
    >
      {children}
    </View>
  );
}