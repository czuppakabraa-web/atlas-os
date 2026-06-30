import { View, Text } from "react-native";

type Props = {
  message: string;
};

export default function AICoachCard({ message }: Props) {
  return (
    <View
      style={{
        backgroundColor: "#1F2937",
        borderRadius: 18,
        padding: 20,
        marginBottom: 20,
        borderLeftWidth: 5,
        borderLeftColor: "#2563EB",
      }}
    >
      <Text
        style={{
          color: "#60A5FA",
          fontSize: 16,
          fontWeight: "600",
          marginBottom: 10,
        }}
      >
        🤖 Atlas Coach
      </Text>

      <Text
        style={{
          color: "white",
          fontSize: 17,
          lineHeight: 26,
        }}
      >
        {message}
      </Text>
    </View>
  );
}