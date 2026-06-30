import { router } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
} from "react-native";

export default function AddScreen() {
  const items = [
    {
      title: "⚖️ Dodaj wagę",
      subtitle: "Dodaj nowy pomiar masy ciała.",
      onPress: () => router.push("/weight"),
    },
    {
      title: "🍽 Dodaj posiłek",
      subtitle: "Dodaj nowy posiłek.",
      onPress: () => router.push("/meal"),
    },
    {
      title: "💧 Dodaj wodę",
      subtitle: "Już wkrótce.",
      onPress: () => {},
    },
    {
      title: "📸 Dodaj zdjęcie sylwetki",
      subtitle: "Już wkrótce.",
      onPress: () => {},
    },
  ];

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
          marginBottom: 30,
        }}
      >
        ➕ Dodaj
      </Text>

      {items.map((item, index) => (
        <Pressable
          key={index}
          onPress={item.onPress}
          style={{
            backgroundColor: "#1F2937",
            borderRadius: 18,
            padding: 22,
            marginBottom: 16,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            {item.title}
          </Text>

          <Text
            style={{
              color: "#9CA3AF",
              marginTop: 8,
              fontSize: 16,
            }}
          >
            {item.subtitle}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}