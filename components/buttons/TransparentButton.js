import { View, Text } from "react-native";
import React from "react";
import { theme } from "../../constants";
import { TouchableOpacity, Dimensions, StyleSheet } from "react-native";

const TransparentButton = () => {
  return (
    <View className="flex-col space-x-2 pb-2 mx-4">
      <View>
        <TouchableOpacity className="p-4">
          <Text className="text-center text-primary">
            Already have an account? <Text className="font-bold">Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransparentButton;
