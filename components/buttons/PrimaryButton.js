import { View, Text } from "react-native";
import React from "react";
import { theme } from "../../constants";
import { TouchableOpacity } from "react-native";

const PrimaryButton = ({ text,disabled=false, onPress = () => {} }) => {
  return (
    <View className="m-2 w-auto">
        <TouchableOpacity disabled={disabled} onPress={onPress} className="rounded-full w-full  border-orange-400 border bg-orange-400 p-4 items-center justify-center align-middle disabled:opacity-50">
          <Text className={`${theme.BUTTON.mainButtonText}`}>{text}</Text>
        </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;
