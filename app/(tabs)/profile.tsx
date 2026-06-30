import { useEffect, useState } from "react";
import {
  View,
 Text,
  TextInput,
  Button,
  Alert,
} from "react-native";

import { getProfile, updateProfile } from "../../lib/profile";

export default function ProfileScreen() {
  const [fullName, setFullName] = useState("");
  const [height, setHeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");

  async function loadProfile() {
    try {
      const profile = await getProfile();

      if (!profile) return;

      setFullName(profile.full_name ?? "");
      setHeight(profile.height_cm?.toString() ?? "");
      setTargetWeight(profile.target_weight?.toString() ?? "");
    } catch (err: any) {
      Alert.alert("Błąd", err.message);
    }
  }

  async function saveProfile() {
    try {
      await updateProfile({
        full_name: fullName,
        height_cm: Number(height),
        target_weight: Number(targetWeight),
      });

      Alert.alert("Sukces", "Profil zapisany.");
    } catch (err: any) {
      Alert.alert("Błąd", err.message);
    }
  }

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111827",
        padding: 25,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 30,
        }}
      >
        👤 Profil
      </Text>

      <Text style={{ color: "white", marginBottom: 8 }}>
        Imię i nazwisko
      </Text>

      <TextInput
        value={fullName}
        onChangeText={setFullName}
        style={{
          backgroundColor: "#1F2937",
          color: "white",
          padding: 15,
          borderRadius: 12,
          marginBottom: 20,
        }}
      />

      <Text style={{ color: "white", marginBottom: 8 }}>
        Wzrost (cm)
      </Text>

      <TextInput
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
        style={{
          backgroundColor: "#1F2937",
          color: "white",
          padding: 15,
          borderRadius: 12,
          marginBottom: 20,
        }}
      />

      <Text style={{ color: "white", marginBottom: 8 }}>
        Waga docelowa
      </Text>

      <TextInput
        value={targetWeight}
        onChangeText={setTargetWeight}
        keyboardType="decimal-pad"
        style={{
          backgroundColor: "#1F2937",
          color: "white",
          padding: 15,
          borderRadius: 12,
          marginBottom: 30,
        }}
      />

      <Button title="Zapisz profil" onPress={saveProfile} />
    </View>
  );
}