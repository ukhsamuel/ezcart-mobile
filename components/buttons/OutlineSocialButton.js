import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { BUTTON } from "../../constants/theme";
import { theme, images } from "../../constants";

const OutlineSocialButton = ({
  img,
  disabled = false,
  onPress = () => {},
}) => {
  const [BTNStyle, setBtnStyle] = useState(BUTTON);
  return (
    <View className="flex-col space-x-2 pb-2 mx-4  mt-4">
      <View>
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          className="rounded-3xl border w-18 h-16 items-center justify-center border-gray-200 bg-white"
        >
          <Image source={img} resizeMode="contain" className="h-6 w-6" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OutlineSocialButton;
