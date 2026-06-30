import { Text, TextProps } from "react-native";

import { AtlasColors } from "@/theme/colors";

type Props = TextProps & {
  dim?: boolean;
};

export default function SystemText({
  dim = false,
  style,
  ...props
}: Props) {
  return (
    <Text
      {...props}
      style={[
        {
          color: dim ? AtlasColors.textDim : AtlasColors.text,
          fontFamily: "monospace",
          fontSize: 16,
        },
        style,
      ]}
    />
  );
}