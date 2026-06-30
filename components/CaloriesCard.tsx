import { View, Text } from "react-native";

type Props = {
  calories: number;
  goal: number;
};

export default function CaloriesCard({
  calories,
  goal,
}: Props) {
  return (
    <View
      style={{
        backgroundColor: "#1F2937",
        borderRadius: 18,
        padding: 20,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          color: "#9CA3AF",
          fontSize: 16,
        }}
      >
        🔥 Kalorie
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 34,
          fontWeight: "bold",
          marginTop: 8,
        }}
      >
        {calories} / {goal}
      </Text>
    </View>
  );
}