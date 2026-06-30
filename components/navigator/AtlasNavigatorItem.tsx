import { Pressable, View } from "react-native";

import SystemText from "@/components/system/SystemText";
import { AtlasColors } from "@/theme/colors";

type Props = {
  glyph: string;
  title: string;
  onPress: () => void;
};

export default function AtlasNavigatorItem({
  glyph,
  title,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 24,
      }}
    >
      <SystemText
        style={{
          width: 40,
          fontSize: 28,
          color: AtlasColors.primary,
        }}
      >
        {glyph}
      </SystemText>

      <View style={{ width: 18 }} />

      <SystemText
        style={{
          fontSize: 28,
          letterSpacing: 2,
        }}
      >
        {title.toUpperCase()}
      </SystemText>
    </Pressable>
  );
}