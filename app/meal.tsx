import { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  ActivityIndicator,
} from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import MealAnalysisCard from "../components/MealAnalysisCard";

import { analyzeMeal } from "../services/ai";
import { saveMeal } from "../lib/meals";

export default function MealScreen() {
  const [meal, setMeal] = useState("");
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<{
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  } | null>(null);

  async function handleAnalyzeMeal() {
    if (!meal.trim()) {
      Alert.alert("Błąd", "Opisz swój posiłek.");
      return;
    }

    try {
      setLoading(true);

      const data = await analyzeMeal(meal);

      await saveMeal({
        description: meal,
        calories: data.calories,
        protein: data.protein,
        carbs: data.carbs,
        fat: data.fat,
      });

      setResult(data);

      Alert.alert("✅ Sukces", "Posiłek został zapisany.");

      setMeal("");
    } catch (err: any) {
      Alert.alert("Błąd", err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#111827",
      }}
      contentContainerStyle={{
        padding: 24,
        paddingTop: 60,
        paddingBottom: 40,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 34,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        🍽 Dodaj posiłek
      </Text>

      <Text
        style={{
          color: "#9CA3AF",
          fontSize: 16,
          marginBottom: 20,
        }}
      >
        Opisz dokładnie, co zjadłeś. Atlas AI sam policzy kalorie i makroskładniki.
      </Text>

      <TextInput
        value={meal}
        onChangeText={setMeal}
        multiline
        placeholder="Np. 250 g piersi z kurczaka, 150 g ryżu i 100 g brokułów."
        placeholderTextColor="#6B7280"
        style={{
          backgroundColor: "#1F2937",
          color: "white",
          borderRadius: 16,
          padding: 20,
          minHeight: 180,
          textAlignVertical: "top",
          fontSize: 17,
          marginBottom: 20,
        }}
      />

      <PrimaryButton
        title={loading ? "🤖 Analizuję..." : "🤖 Analizuj i zapisz"}
        onPress={handleAnalyzeMeal}
      />

      {loading && (
        <ActivityIndicator
          size="large"
          color="#2563EB"
          style={{ marginTop: 30 }}
        />
      )}

      {result && (
        <MealAnalysisCard
          calories={result.calories}
          protein={result.protein}
          carbs={result.carbs}
          fat={result.fat}
        />
      )}
    </ScrollView>
  );
}