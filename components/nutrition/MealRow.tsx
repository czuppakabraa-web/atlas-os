import { Pressable, Text, View } from "react-native";

import { Meal } from "../../types/meal";
import { Colors, Typography } from "../../theme";

type Props = {
  meal: Meal;
  onPress: (meal: Meal) => void;
};

export default function MealRow({
  meal,
  onPress,
}: Props) {
  const time = new Date(meal.created_at).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Pressable
      onPress={() => onPress(meal)}
      style={{
        paddingVertical: 18,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
      }}
    >
      <Text
        style={{
          color: Colors.secondaryText,
          fontSize: Typography.micro,
          letterSpacing: 2,
          marginBottom: 8,
        }}
      >
        {time}
      </Text>

      <Text
        style={{
          color: Colors.text,
          fontSize: Typography.body,
          marginBottom: 6,
        }}
      >
        {meal.description}
      </Text>

      <Text
        style={{
          color: Colors.primary,
          fontSize: Typography.caption,
        }}
      >
        {meal.calories} kcal
      </Text>
    </Pressable>
  );
}