import { Pressable } from "react-native";

import AtlasGlyph from "@/components/glyphs/AtlasGlyph";

type Props = {
  onPress: () => void;
};

export default function AtlasNavigatorButton({
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={24}
      style={{
        position: "absolute",

        left: 22,
        bottom: 18,

        width: 64,
        height: 64,

        justifyContent: "center",
        alignItems: "center",

        zIndex: 9999,
      }}
    >
      <AtlasGlyph symbol="◈" size={34} />
    </Pressable>
  );
}