import { View, Text } from "react-native";
import React from "react";
import { theme } from "../../constants";
import { TouchableOpacity } from "react-native";

const AltPrimaryButton = ({ text, disabled = false, onPress = () => {} }) => {
  return (
    <View className="h-24 px-2 align-middle justify-center py-2">
      <TouchableOpacity className="rounded-full  bg-yellow-50 p-4  disabled:opacity-50">
        <Text className={`${theme.BUTTON.altButtonText}`}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AltPrimaryButton;
