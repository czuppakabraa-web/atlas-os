import { useState } from "react";
import { Alert, View } from "react-native";
import { router } from "expo-router";

import TextField from "../components/ui/TextField";
import PrimaryButton from "../components/ui/PrimaryButton";

import { saveWeight } from "../lib/weights";

export default function WeightScreen() {
  const [weight, setWeight] = useState("");

  async function save() {
    if (!weight) {
      Alert.alert("Błąd", "Podaj wagę.");
      return;
    }

    try {
      await saveWeight(Number(weight.replace(",", ".")));

      Alert.alert("Sukces", "Waga zapisana.");

      router.back();
    } catch (err: any) {
      Alert.alert("Błąd", err.message);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111827",
        padding: 24,
        justifyContent: "center",
      }}
    >
      <TextField
        value={weight}
        onChangeText={setWeight}
        placeholder="Podaj wagę"
        keyboardType="decimal-pad"
      />

      <PrimaryButton
        title="Zapisz wagę"
        onPress={save}
      />
    </View>
  );
}