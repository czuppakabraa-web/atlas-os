import { TextInput } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: any;
};

export default function TextField({
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
}: Props) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#6B7280"
      keyboardType={keyboardType}
      style={{
        backgroundColor: "#1F2937",
        color: "white",
        borderRadius: 14,
        padding: 16,
        fontSize: 18,
        marginBottom: 16,
      }}
    />
  );
}