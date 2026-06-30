import { View, Text } from "react-native";

type Props = {
  weight: number | null;
};

export default function WeightCard({ weight }: Props) {
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
        ⚖️ Aktualna waga
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 40,
          fontWeight: "bold",
          marginTop: 8,
        }}
      >
        {weight ? `${weight} kg` : "--"}
      </Text>

      <Text
        style={{
          color: "#22C55E",
          marginTop: 8,
        }}
      >
        Ostatni pomiar
      </Text>
    </View>
  );
}