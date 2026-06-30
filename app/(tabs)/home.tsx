import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
} from "react-native";

import AtlasNavigator from "@/components/navigator/AtlasNavigator";
import SystemCard from "../../components/cards/SystemCard";

import {
  Colors,
  Spacing,
  Typography,
} from "../../theme";

import { getOverview } from "../../services/overview";

export default function HomeScreen() {
  const [overview, setOverview] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function loadOverview() {
    try {
      setLoading(true);

      const data = await getOverview();

      setOverview(data);
    } catch (err: any) {
      Alert.alert("Error", err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOverview();
  }, []);

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

  const weight =
    overview?.currentWeight != null
      ? overview.currentWeight.toFixed(1)
      : "--";

  const target =
    overview?.targetWeight != null
      ? overview.targetWeight
      : "--";

  const calories =
    overview?.totals?.calories ?? 0;

  const protein =
    Math.round(overview?.totals?.protein ?? 0);

  const carbs =
    Math.round(overview?.totals?.carbs ?? 0);

  const fat =
    Math.round(overview?.totals?.fat ?? 0);

  return (
    <>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Colors.background,
        }}
        contentContainerStyle={{
          padding: Spacing.lg,
          paddingTop: 70,
          paddingBottom: 120,
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            letterSpacing: 6,
            fontSize: Typography.micro,
          }}
        >
          ATLAS OS
        </Text>

        <Text
          style={{
            color: Colors.text,
            fontSize: 46,
            fontWeight: "200",
            marginTop: 8,
            marginBottom: 40,
          }}
        >
          OVERVIEW
        </Text>

        <SystemCard
          title="Body Mass"
          value={weight}
          unit="kg"
          status={`TARGET ${target} KG`}
        />

        <SystemCard
          title="Energy"
          value={String(calories)}
          unit="kcal"
          status="TODAY"
        />

        <SystemCard
          title="Protein"
          value={String(protein)}
          unit="g"
          status="TODAY"
        />

        <SystemCard
          title="Carbohydrates"
          value={String(carbs)}
          unit="g"
          status="TODAY"
        />

        <SystemCard
          title="Fat"
          value={String(fat)}
          unit="g"
          status="TODAY"
        />
      </ScrollView>

      <AtlasNavigator />
    </>
  );
}