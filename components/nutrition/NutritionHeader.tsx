import { Pressable, View } from "react-native";

import SystemHeading from "@/components/system/SystemHeading";
import SystemText from "@/components/system/SystemText";
import { AtlasColors } from "@/theme/colors";
import SystemStatus from "../system/SystemStatus";

type Props = {
  date: Date;
  onPrevious: () => void;
  onNext: () => void;
};

function formatDate(date: Date) {
  const today = new Date();

  if (date.toDateString() === today.toDateString()) {
    return "TODAY";
  }

  return date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
}

export default function NutritionHeader({
  date,
  onPrevious,
  onNext,
}: Props) {
  return (
    <View
      style={{
        marginBottom: 40,
      }}
    >
      <SystemHeading>NUTRITION</SystemHeading>

      <SystemStatus>
    [NTR-2359-OS]
</SystemStatus>

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
          }}
        >
          <SystemText
            style={{
              color: AtlasColors.primary,
              fontSize: 22,
            }}
          >
            ◀
          </SystemText>
        </Pressable>

        <View
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <SystemText
            style={{
              fontSize: 22,
              letterSpacing: 3,
            }}
          >
            {formatDate(date)}
          </SystemText>
        </View>

        <Pressable
          onPress={onNext}
          style={{
            width: 40,
            alignItems: "flex-end",
          }}
        >
          <SystemText
            style={{
              color: AtlasColors.primary,
              fontSize: 22,
            }}
          >
            ▶
          </SystemText>
        </Pressable>
      </View>
    </View>
  );
}