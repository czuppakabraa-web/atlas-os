import { Text, View } from "react-native";

import { Colors } from "../../theme";

type Props = {
  module: string;
};

export default function AtlasHeader({
  module,
}: Props) {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingTop: 12,
        paddingBottom: 30,
      }}
    >
      <Text
        style={{
          color: Colors.primary,
          letterSpacing: 5,
          fontSize: 11,
        }}
      >
        ATLAS OS
      </Text>

      <Text
        style={{
          color: Colors.text,
          fontSize: 42,
          fontWeight: "200",
          marginTop: 8,
        }}
      >
        {module.toUpperCase()}
      </Text>
    </View>
  );
}