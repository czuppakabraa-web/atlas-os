import { useState } from "react";
import { Pressable, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";

import { router } from "expo-router";
import AtlasNavigatorButton from "./AtlasNavigatorButton";
import AtlasNavigatorPanel from "./AtlasNavigatorPanel";

export default function AtlasNavigator() {
  const [open, setOpen] = useState(false);

  const translateY = useSharedValue(700);

  function toggle() {
    if (open) {
      translateY.value = withSpring(700);
      setOpen(false);
    } else {
      setOpen(true);
      translateY.value = withSpring(0);
    }
  }
  function navigate(path: string) {
  console.log("Navigate:", path);

  translateY.value = withSpring(700);

  setOpen(false);

  setTimeout(() => {
    router.push(path as any);
  }, 220);
}

  const panelStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: translateY.value,
      },
    ],
  }));

  return (
    <View
      pointerEvents="box-none"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: -30,
      }}
    >
      {open && (
        <Pressable
          onPress={toggle}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.45)",
          }}
        />
      )}

      <Animated.View
        style={[
          {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
          },
          panelStyle,
        ]}
      >
        <AtlasNavigatorPanel
  onNavigate={navigate}
/>
      </Animated.View>

      <AtlasNavigatorButton onPress={toggle} />
    </View>
  );
}