import { View, Text } from "react-native";
import React, { useState }  from "react";
import { TouchableOpacity } from "react-native";
import { BUTTON } from "../../constants/theme";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { theme, images, COLORS } from "../../constants";

const FilterOutlineButton = ({ text,disabled=false, icon='', selected=false,  onPress = () => {} }) => {
  const [BTNStyle, setBtnStyle] = useState(BUTTON);
    return (
        <View className="flex-col mx-2">
          <View>
          {/* <TouchableOpacity onPress={onPress}  disabled={disabled} className={`${BTNStyle.outline}`}> */}
          <TouchableOpacity onPress={onPress}  disabled={disabled} className={`h-10 rounded-3xl border-2 flex-row border-orange-400 px-6 justify-center items-center ${selected?'bg-orange-400':''} `}>
              {
                icon && 
                <FontAwesome name={icon} color={COLORS.primary} size={22} />
              }
              <Text className={`text-center text-sm font-semibold ${selected?'text-white':'text-orange-400'} `}>{text}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
}

export default FilterOutlineButton