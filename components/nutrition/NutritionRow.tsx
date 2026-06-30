import { View } from "react-native";

import SystemNumber from "@/components/system/SystemNumber";
import SystemText from "@/components/system/SystemText";

type Props = {
  name: string;
  kcal: number | string;
  protein: number | string;
  carbs: number | string;
  fat: number | string;
};

export default function NutritionRow({
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
        marginBottom: 14,
      }}
    >
      <SystemText
        style={{
          flex: 1,
        }}
      >
        {name}
      </SystemText>

      <SystemNumber
        style={{
          width: 60,
          fontSize: 18,
        }}
      >
        {String(kcal)}
      </SystemNumber>

      <SystemNumber
        style={{
          width: 55,
          fontSize: 18,
        }}
      >
        {String(protein)}
      </SystemNumber>

      <SystemNumber
        style={{
          width: 55,
          fontSize: 18,
        }}
      >
        {String(carbs)}
      </SystemNumber>

      <SystemNumber
        style={{
          width: 55,
          fontSize: 18,
        }}
      >
        {String(fat)}
      </SystemNumber>
    </View>
  );
}