import { Pressable, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function PrimaryButton({
  title,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#2563EB",
        paddingVertical: 16,
        borderRadius: 14,
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 18,
          fontWeight: "600",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}