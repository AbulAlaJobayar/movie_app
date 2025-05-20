import React from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolateColor,
} from "react-native-reanimated";

type TTabIconProps = {
  icon: string;
  focused: boolean;
  name: string;
};

const TabIcon = ({ icon, focused, name }: TTabIconProps) => {
  // Animated styles for the background
  const bgStyle = useAnimatedStyle(() => ({
    width: withSpring(focused ? "100%" : 0, {
      damping: 15,
      stiffness: 120,
    }),
    opacity: withTiming(focused ? 1 : 0, { duration: 300 }),
    backgroundColor: interpolateColor(
      focused ? 1 : 0,
      [0, 1],
      ["transparent", "rgba(216, 180, 254, 0.7)"]
    ),
  }));

  // Animated styles for the icon
  const iconStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(focused ? 1.2 : 1) }],
    color: interpolateColor(
      focused ? 1 : 0,
      [0, 1],
      ["#A8B5DB", "#151312"]
    ),
  }));

  // Animated styles for the text
  const textStyle = useAnimatedStyle(() => ({
    opacity: withTiming(focused ? 1 : 0, { duration: 300 }),
    transform: [{ translateX: withSpring(focused ? 0 : -10) }],
  }));

  return (
    <View className="flex-1 items-center justify-center mt-3">
      <Animated.View
        className="absolute flex-row min-w-[120px] min-h-14 rounded-full overflow-hidden"
        style={bgStyle}
      />
      
      <View className="flex-row items-center px-4 py-2 ">
        <Animated.Text style={iconStyle}>
          <Icon name={icon} size={15} />
        </Animated.Text>
        
        {focused && (
          <Animated.Text 
            style={textStyle}
            className="text-base font-semibold ml-2"
          >
            {name}
          </Animated.Text>
        )}
      </View>
    </View>
  );
};

export default TabIcon;