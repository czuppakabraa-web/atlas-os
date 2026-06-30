import { Text, TextProps } from "react-native";

import { AtlasColors } from "@/theme/colors";
import { AtlasTypography } from "@/theme/typography";

export default function SystemNumber(props: TextProps) {
  return (
    <Text
      {...props}
      style={[
        {
          color: AtlasColors.primary,
          fontFamily: "monospace",
          fontSize: AtlasTypography.number,
          textAlign: "right",
        },
        props.style,
      ]}
    />
  );
}