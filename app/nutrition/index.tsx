import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  ScrollView,
} from "react-native";
import { useFocusEffect } from "expo-router";

import NutritionHeader from "../../components/nutrition/NutritionHeader";
import NutritionTimeline from "../../components/nutrition/NutritionTimeline";

import {
  getMealsByDate,
  calculateNutrition,
  deleteMeal,
} from "../../services/nutrition";

import { Meal } from "../../types/meal";

import {
  Colors,
  Spacing,
} from "../../theme";

export default function NutritionScreen() {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [currentDate, setCurrentDate] = useState(new Date());

  const [meals, setMeals] = useState<Meal[]>([]);

  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  async function loadMeals(date: Date = currentDate) {
    try {
      const data = await getMealsByDate(date);
      setMeals(data);
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  }

  async function refresh() {
    try {
      setRefreshing(true);
      await loadMeals(currentDate);
    } finally {
      setRefreshing(false);
    }
  }

  async function handleDelete(meal: Meal) {
    try {
      await deleteMeal(meal.id);

      setModalVisible(false);
      setSelectedMeal(null);

      await loadMeals(currentDate);
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  }

  function previousDay() {
    const date = new Date(currentDate);

    date.setDate(date.getDate() - 1);

    setCurrentDate(date);

    loadMeals(date);
  }

  function nextDay() {
    const date = new Date(currentDate);

    date.setDate(date.getDate() + 1);

    setCurrentDate(date);

    loadMeals(date);
  }

  useFocusEffect(
    useCallback(() => {
      async function load() {
        try {
          setLoading(true);
          await loadMeals(currentDate);
        } finally {
          setLoading(false);
        }
      }

      load();
    }, [currentDate])
  );

  if (loading) {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.background,
        }}
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator
          size="large"
          color={Colors.primary}
        />
      </ScrollView>
    );
  }

  const totals = calculateNutrition(meals);

  const date = currentDate
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refresh}
          />
        }
        style={{
          flex: 1,
          backgroundColor: Colors.background,
        }}
        contentContainerStyle={{
          padding: Spacing.lg,
          paddingTop: 60,
          paddingBottom: 80,
        }}
      >
        <NutritionHeader
          date={date}
          onPrevious={previousDay}
          onNext={nextDay}
        />

        <NutritionTimeline
          meals={meals}
          calories={totals.calories}
          protein={totals.protein}
          carbs={totals.carbs}
          fat={totals.fat}
          onMealPress={(meal) => {
            setSelectedMeal(meal);
            setModalVisible(true);
          }}
        />
      </ScrollView>

    
    </>
  );
}