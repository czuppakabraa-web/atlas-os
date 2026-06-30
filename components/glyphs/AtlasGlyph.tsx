import SystemText from "@/components/system/SystemText";
import { AtlasColors } from "@/theme/colors";

type Props = {
  symbol: string;
  size?: number;
};

export default function AtlasGlyph({
  symbol,
  size = 34,
}: Props) {
  return (
    <SystemText
      style={{
        fontSize: size,
        color: AtlasColors.primary,

        textShadowColor: "rgba(82,232,255,0.75)",
        textShadowRadius: 12,
      }}
    >
      {symbol}
    </SystemText>
  );
}