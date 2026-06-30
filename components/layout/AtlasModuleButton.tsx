import { Pressable, Text } from "react-native";

import { Colors } from "../../theme";

type Props = {
  glyph: string;
  onPress: () => void;
};

export default function AtlasModuleButton({
  glyph,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        position: "absolute",

        bottom: 30,

        left: 24,

        width: 52,

        height: 52,

        borderRadius: 26,

        borderWidth: 1,

        borderColor: Colors.border,

        justifyContent: "center",

        alignItems: "center",

        backgroundColor: Colors.surface,
      }}
    >
      <Text
        style={{
          color: Colors.primary,

          fontSize: 24,
        }}
      >
        {glyph}
      </Text>
    </Pressable>
  );
}