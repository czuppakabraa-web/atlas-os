import { Pressable, Text, View } from "react-native";

import { Meal } from "../../types/meal";
import { Colors, Typography } from "../../theme";

type Props = {
  meals: Meal[];
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  onMealPress: (meal: Meal) => void;
};

export default function NutritionTimeline({
  meals,
  calories,
  protein,
  carbs,
  fat,
  onMealPress,
}: Props) {
  return (
    <View style={{ marginTop: 20 }}>
      {/* HEADER */}

      <View
        style={{
          flexDirection: "row",
          paddingBottom: 12,
          borderBottomWidth: 1,
          borderBottomColor: Colors.border,
        }}
      >
        <Text
          style={{
            flex: 3,
            color: Colors.secondaryText,
            fontSize: Typography.micro,
            letterSpacing: 2,
          }}
        >
          NAME
        </Text>

        <Text style={{ flex: 1, textAlign: "center", color: Colors.secondaryText }}>
          KCAL
        </Text>

        <Text style={{ flex: 1, textAlign: "center", color: Colors.secondaryText }}>
          P
        </Text>

        <Text style={{ flex: 1, textAlign: "center", color: Colors.secondaryText }}>
          C
        </Text>

        <Text style={{ flex: 1, textAlign: "center", color: Colors.secondaryText }}>
          F
        </Text>
      </View>

      {/* TOTAL */}

      <View
        style={{
          flexDirection: "row",
          paddingVertical: 16,
          borderBottomWidth: 2,
          borderBottomColor: Colors.primary,
        }}
      >
        <Text
          style={{
            flex: 3,
            color: Colors.primary,
            fontWeight: "700",
            fontSize: Typography.body,
          }}
        >
          TOTAL
        </Text>

        <Text style={{ flex: 1, textAlign: "center", color: Colors.primary, fontWeight: "700" }}>
          {calories}
        </Text>

        <Text style={{ flex: 1, textAlign: "center", color: Colors.primary, fontWeight: "700" }}>
          {Math.round(protein)}
        </Text>

        <Text style={{ flex: 1, textAlign: "center", color: Colors.primary, fontWeight: "700" }}>
          {Math.round(carbs)}
        </Text>

        <Text style={{ flex: 1, textAlign: "center", color: Colors.primary, fontWeight: "700" }}>
          {Math.round(fat)}
        </Text>
      </View>

      {/* MEALS */}

      {meals.map((meal) => (
        <Pressable
          key={meal.id}
          onPress={() => onMealPress(meal)}
          style={{
            flexDirection: "row",
            paddingVertical: 16,
            borderBottomWidth: 1,
            borderBottomColor: Colors.border,
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              flex: 3,
              color: Colors.text,
              fontSize: Typography.body,
            }}
          >
            {meal.description}
          </Text>

          <Text style={{ flex: 1, textAlign: "center", color: Colors.text }}>
            {meal.calories}
          </Text>

          <Text style={{ flex: 1, textAlign: "center", color: Colors.text }}>
            {Math.round(meal.protein)}
          </Text>

          <Text style={{ flex: 1, textAlign: "center", color: Colors.text }}>
            {Math.round(meal.carbs)}
          </Text>

          <Text style={{ flex: 1, textAlign: "center", color: Colors.text }}>
            {Math.round(meal.fat)}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}