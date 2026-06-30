import { View } from "react-native";

import SystemNumber from "@/components/system/SystemNumber";
import SystemText from "@/components/system/SystemText";

type Props = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export default function NutritionSummary({
  calories,
  protein,
  carbs,
  fat,
}: Props) {
  return (
    <View
      style={{
        marginBottom: 42,
      }}
    >
      <SystemText
        dim
        style={{
          marginBottom: 12,
          letterSpacing: 2,
        }}
      >
        TOTAL
      </SystemText>

      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 2 }} />

        <View style={{ flex: 1 }}>
          <SystemText dim style={{ textAlign: "right" }}>
            KCAL
          </SystemText>
          <SystemNumber style={{ fontSize: 36 }}>
            {calories}
          </SystemNumber>
        </View>

        <View style={{ width: 70 }}>
          <SystemText dim style={{ textAlign: "right" }}>
            P
          </SystemText>
          <SystemNumber style={{ fontSize: 36 }}>
            {protein}
          </SystemNumber>
        </View>

        <View style={{ width: 70 }}>
          <SystemText dim style={{ textAlign: "right" }}>
            C
          </SystemText>
          <SystemNumber style={{ fontSize: 36 }}>
            {carbs}
          </SystemNumber>
        </View>

        <View style={{ width: 70 }}>
          <SystemText dim style={{ textAlign: "right" }}>
            F
          </SystemText>
          <SystemNumber style={{ fontSize: 36 }}>
            {fat}
          </SystemNumber>
        </View>
      </View>
    </View>
  );
}