import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { theme } from "../../constants";
import { TouchableOpacity } from "react-native";
import { BUTTON } from "../../constants/theme";

const OutlineButton = ({ text, img=null, disabled = false, onPress = () => {} }) => {
  const [BTNStyle, setBtnStyle] = useState(BUTTON);
  return (
    <View className="flex-col space-x-2 mx-4  mt-4">
      {/* <View> */}
        {/* <TouchableOpacity onPress={onPress}  disabled={disabled} className={`${BTNStyle.outline}`}> */}
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          className="rounded-2xl border space-x-2 align-middle justify-center items-center flex-row border-slate-200 bg-white p-4"
        >
         {img && <Image resizeMode="center" source={img} className="h-6 w-6" />}
          <Text className={`${theme.BUTTON.outlineButtonText}`}>{text}</Text>
        </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

export default OutlineButton;
