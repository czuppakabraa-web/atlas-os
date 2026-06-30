import { View, Text } from "react-native";

import { Colors, Typography } from "../../theme";

type Props = {
  label: string;
  value: string;
  unit?: string;
};

export default function Metric({
  label,
  value,
  unit,
}: Props) {
  return (
    <View style={{ marginBottom: 18 }}>
      <Text
        style={{
          color: Colors.secondaryText,
          letterSpacing: 2,
          fontSize: Typography.micro,
          marginBottom: 6,
        }}
      >
        {label.toUpperCase()}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
        }}
      >
        <Text
          style={{
            color: Colors.text,
            fontSize: 44,
            fontWeight: "200",
          }}
        >
          {value}
        </Text>

        {unit && (
          <Text
            style={{
              color: Colors.secondaryText,
              marginLeft: 8,
              marginBottom: 6,
              fontSize: Typography.body,
            }}
          >
            {unit}
          </Text>
        )}
      </View>
    </View>
  );
}