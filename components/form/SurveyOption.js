import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { theme, images, COLORS } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";

const SurveyOption = ({ text, isSelected, onPress = () => {}}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    className={`border-2 h-20 p-2 rounded-3xl flex-row items-center px-4 my-2`}
    style={{
      borderColor:
      isSelected
          ? COLORS.success
          : null,
      backgroundColor:
      isSelected
          ? COLORS.success + "20"
          : null,
      justifyContent: "space-between",
    }}
  >
    <Text className="text-lg font-bold text-primary">
        {text}
    </Text>

    {/* Show Check Or Cross Icon based on correct answer*/}
    {isSelected && (
      <View
        style={{
          width: 30,
          height: 30,
          borderRadius: 30 / 2,
          backgroundColor: COLORS.success,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="check"
          style={{
            color: COLORS.white,
            fontSize: 20,
          }}
        />
      </View>
    ) 
    }
  </TouchableOpacity>
  )
}

export default SurveyOption