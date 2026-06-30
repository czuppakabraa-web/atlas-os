import { Pressable, View } from "react-native";

import AtlasGlyph from "@/components/glyphs/AtlasGlyph";
import SystemText from "@/components/system/SystemText";
import { AtlasColors } from "@/theme/colors";

type Props = {
  glyph: string;
  title: string;
  subtitle: string;
  onPress: () => void;
};

export default function AtlasNavigatorModule({
  glyph,
  title,
  subtitle,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={() => {
  console.log("MODULE CLICK:", title);
  onPress();
}}
      style={{
        flexDirection: "row",
        alignItems: "center",
        minHeight: 56,
      }}
    >
      <View
        style={{
          width: 62,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       <AtlasGlyph
  symbol={glyph}
  size={28}
/>
      </View>

      <View
        style={{
          marginLeft: 14,
          flex: 1,
        }}
      >
        <SystemText
          style={{
            color: AtlasColors.primary,
            fontSize: 19,
            letterSpacing: 3,
          }}
        >
          {title}
        </SystemText>

        <SystemText
          dim
          style={{
            marginTop: 4,
            fontSize: 11,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {subtitle}
        </SystemText>
      </View>
    </Pressable>
  );
}