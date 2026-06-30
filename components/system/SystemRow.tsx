import { Text, View } from "react-native";

import { AtlasColors } from "@/theme/colors";

type Props = {
  name: string;
  kcal: number | string;
  protein: number | string;
  carbs: number | string;
  fat: number | string;
};

export default function SystemRow({
  name,
  kcal,
  protein,
  carbs,
  fat,
}: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
      }}
    >
      <Text
        style={{
          flex: 1,
          color: AtlasColors.text,
          fontFamily: "monospace",
          fontSize: 16,
        }}
      >
        {name}
      </Text>

      <Text style={numberStyle}>{kcal}</Text>
      <Text style={numberStyle}>{protein}</Text>
      <Text style={numberStyle}>{carbs}</Text>
      <Text style={numberStyle}>{fat}</Text>
    </View>
  );
}

const numberStyle = {
  width: 55,
  textAlign: "right" as const,
  color: AtlasColors.primary,
  fontFamily: "monospace",
  fontSize: 16,
};