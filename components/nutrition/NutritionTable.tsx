import { View } from "react-native";

import NutritionRow from "@/components/nutrition/NutritionRow";
import SystemText from "@/components/system/SystemText";

type Meal = {
  id?: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

type Props = {
  meals: Meal[];
};

export default function NutritionTable({ meals }: Props) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 18,
        }}
      >
        <SystemText
          dim
          style={{
            flex: 1,
            letterSpacing: 2,
          }}
        >
          NAME
        </SystemText>

        <SystemText
          dim
          style={{
            width: 60,
            textAlign: "right",
          }}
        >
          KCAL
        </SystemText>

        <SystemText
          dim
          style={{
            width: 55,
            textAlign: "right",
          }}
        >
          P
        </SystemText>

        <SystemText
          dim
          style={{
            width: 55,
            textAlign: "right",
          }}
        >
          C
        </SystemText>

        <SystemText
          dim
          style={{
            width: 55,
            textAlign: "right",
          }}
        >
          F
        </SystemText>
      </View>

      {meals.map((meal, index) => (
  <NutritionRow
    key={meal.id ?? index}
    name={meal.name}
    kcal={meal.calories}
    protein={meal.protein}
    carbs={meal.carbs}
    fat={meal.fat}
  />
))}
    </View>
  );
}