import { View, Text } from "react-native";

type Props = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export default function MealAnalysisCard({
  calories,
  protein,
  carbs,
  fat,
}: Props) {
  return (
    <View
      style={{
        backgroundColor: "#1F2937",
        borderRadius: 18,
        padding: 20,
        marginTop: 25,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        🤖 Analiza AI
      </Text>

      <Text style={{ color: "white", fontSize: 18 }}>
        🔥 Kalorie: {calories} kcal
      </Text>

      <Text style={{ color: "white", fontSize: 18, marginTop: 10 }}>
        🥩 Białko: {protein} g
      </Text>

      <Text style={{ color: "white", fontSize: 18, marginTop: 10 }}>
        🍚 Węglowodany: {carbs} g
      </Text>

      <Text style={{ color: "white", fontSize: 18, marginTop: 10 }}>
        🧈 Tłuszcze: {fat} g
      </Text>
    </View>
  );
}