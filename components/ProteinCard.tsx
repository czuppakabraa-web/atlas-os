import { View, Text } from "react-native";

type Props = {
  protein: number;
  goal: number;
};

export default function ProteinCard({
  protein,
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
        🥩 Białko
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 34,
          fontWeight: "bold",
          marginTop: 8,
        }}
      >
        {protein} / {goal} g
      </Text>
    </View>
  );
}