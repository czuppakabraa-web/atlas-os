import { ImageBackground, View } from "react-native";

import AtlasNavigatorModule from "./AtlasNavigatorModule";
import { AtlasModules } from "./modules";

type Props = {
  onNavigate: (path: string) => void;
};

export default function AtlasNavigatorPanel({
  onNavigate,
}: Props) {
  return (
    <ImageBackground
      source={require("@/assets/ui/navigation_panel.webp")}
      resizeMode="stretch"
      style={{
        marginLeft: -18,
marginRight: 45,
        marginBottom: 8,

        height: 720,

        paddingTop: 82,
        paddingLeft: 58,
        paddingRight: 58,
        paddingBottom: 130,

        overflow: "hidden",
      }}
    >
      <View
  style={{
    flex: 1,
  }}
>
  {AtlasModules.map((module) => (
    <AtlasNavigatorModule
      key={module.route}
      glyph={module.glyph}
      title={module.title}
      subtitle={module.subtitle}
      onPress={() => onNavigate(module.route)}
    />
  ))}
</View>
    </ImageBackground>
  );
}