import { router } from "expo-router";
import { useState } from "react";
import { Alert, View } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import TextField from "../components/ui/TextField";

import { saveUserWeight } from "@/services/weightService";

export default function WeightScreen() {
  const [weight, setWeight] = useState("");

  async function save() {
    try {
      await saveUserWeight(weight);

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