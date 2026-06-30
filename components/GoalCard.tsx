import { View, Text } from "react-native";

type Props = {
  currentWeight: number | null;
  targetWeight: number;
};

export default function GoalCard({
  currentWeight,
  targetWeight,
}: Props) {
  const left =
    currentWeight !== null
      ? (currentWeight - targetWeight).toFixed(1)
      : "--";

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
        🎯 Cel
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 34,
          fontWeight: "bold",
          marginTop: 8,
        }}
      >
        {targetWeight} kg
      </Text>

      <Text
        style={{
          color: "#60A5FA",
          marginTop: 8,
          fontSize: 16,
        }}
      >
        Pozostało {left} kg
      </Text>
    </View>
  );
}