import { Text } from "react-native";

import { Colors, Typography } from "../../theme";

type Props = {
  children: string;
};

export default function SectionTitle({ children }: Props) {
  return (
    <Text
      style={{
        color: Colors.secondaryText,
        fontSize: Typography.caption,
        letterSpacing: 3,
        marginBottom: 12,
      }}
    >
      {children.toUpperCase()}
    </Text>
  );
}