import { View, Text } from "react-native";

type Props = {
  weight: number | null;
  targetWeight: number | null;
};

export default function StatsCard({
  weight,
  targetWeight,
}: Props) {
  const left =
    weight && targetWeight
      ? Math.abs(weight - targetWeight).toFixed(1)
      : "--";

  return (
    <View
      style={{
        backgroundColor: "#1F2937",
        borderRadius: 20,
        padding: 20,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          color: "#9CA3AF",
          fontSize: 16,
          marginBottom: 20,
        }}
      >
        📊 Statystyki
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text
            style={{
              color: "#9CA3AF",
            }}
          >
            Aktualna
          </Text>

          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            {weight ?? "--"} kg
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: "#9CA3AF",
            }}
          >
            Do celu
          </Text>

          <Text
            style={{
              color: "#22C55E",
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            {left} kg
          </Text>
        </View>
      </View>
    </View>
  );
}