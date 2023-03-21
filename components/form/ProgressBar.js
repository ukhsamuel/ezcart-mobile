import { View, Text, Animated } from 'react-native'
import React from 'react'
import { theme, images, COLORS } from "../../constants";

const progressBar = ({progressAnim}) => {
  return (
    <View
      style={{
        width: "90%",
        height: 12,
        borderRadius: 20,
        backgroundColor: "#00000020",
      }}
    >
      <Animated.View
        style={[
          {
            height: 12,
            borderRadius: 20,
            backgroundColor: COLORS.primary,
          },
          {
            width: progressAnim,
          },
        ]}
      ></Animated.View>
    </View>
  )
}

export default progressBar