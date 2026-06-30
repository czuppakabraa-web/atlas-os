import { View, Text } from "react-native";

import { Colors } from "../../theme";

type Props = {
  status: string;
};

export default function StatusLine({
  status,
}: Props) {
  return (
    <View
      style={{
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        paddingTop: 16,
        marginTop: 18,
      }}
    >
      <Text
        style={{
          color: Colors.success,
          letterSpacing: 2,
          fontSize: 13,
        }}
      >
        {status.toUpperCase()}
      </Text>
    </View>
  );
}