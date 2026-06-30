import { Pressable, Text, View } from "react-native";

import { Colors } from "../../theme";

type Props = {
  date: string;
  onPrevious: () => void;
  onNext: () => void;
};

export default function NutritionHeader({
  date,
  onPrevious,
  onNext,
}: Props) {
  return (
    <View
      style={{
        marginBottom: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={onPrevious}
          style={{
            width: 40,
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              color: Colors.primary,
              fontSize: 22,
            }}
          >
            ◀
          </Text>
        </Pressable>

        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: Colors.text,
              fontSize: 18,
              letterSpacing: 3,
              fontWeight: "600",
            }}
          >
            {date}
          </Text>
        </View>

        <Pressable
          onPress={onNext}
          style={{
            width: 40,
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: Colors.primary,
              fontSize: 22,
            }}
          >
            ▶
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          height: 1,
          backgroundColor: Colors.border,
          marginTop: 18,
        }}
      />
    </View>
  );
}