import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { signIn } from "../../lib/auth";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function login() {
  const { error } = await signIn(email, password);

  if (error) {
    Alert.alert("Błąd", error.message);
    return;
  }

  router.replace("/home");
}

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111827",
        justifyContent: "center",
        padding: 25,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 38,
          fontWeight: "bold",
          marginBottom: 40,
        }}
      >
        ATLAS 🚀
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{
          backgroundColor: "#1F2937",
          color: "white",
          padding: 16,
          borderRadius: 12,
          marginBottom: 15,
        }}
      />

      <TextInput
        placeholder="Hasło"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          backgroundColor: "#1F2937",
          color: "white",
          padding: 16,
          borderRadius: 12,
          marginBottom: 25,
        }}
      />

      <TouchableOpacity
        onPress={login}
        style={{
          backgroundColor: "#22C55E",
          padding: 18,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Zaloguj się
        </Text>
      </TouchableOpacity>
    </View>
  );
}