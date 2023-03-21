import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const SectionHeader = ({ title, showButton = false, onPress = () => {} }) => {
  return (
    <View className="flex-row mt-4 mb-4">
      <View className="basis-9/12 justify-center align-middle ">
        <Text className="font-bold text-lg">{title}</Text>
      </View>
      {showButton && (
        <TouchableOpacity
          onPress={onPress}
          className="basis-3/12 justify-center align-middle items-end"
        >
          <Text className="text-orange-400 text-lg font-semibold">See All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SectionHeader;
