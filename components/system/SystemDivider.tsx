import { View } from "react-native";

import { Colors } from "@/theme";

type Props = {
  marginTop?: number;
  marginBottom?: number;
};

export default function SystemDivider({
  marginTop = 24,
  marginBottom = 24,
}: Props) {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: Colors.divider,
        marginTop,
        marginBottom,
      }}
    />
  );
}