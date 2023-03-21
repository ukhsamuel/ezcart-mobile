import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme, images } from "../../constants";
import { StarIcon, HeartIcon } from "react-native-heroicons/solid";

const OrderCard = ({ status = "completed" }) => {
  return (
    <View className="bg-white mb-6 h-auto flex-col shadow-lg shadow-zinc-100 w-full rounded-3xl p-2">
      <View className="w-full flex-row">
        <View className="basis-3/12 items-center h-36 justify-center align-middle ">
          <Image
            source={images.cuddleclub}
            className="h-28 w-28 rounded-3xl mb-2"
          />
        </View>
        <View className="basis-9/12 pl-4 align-middle justify-center space-y-2">
          <Text
            numberOfLines={1}
            className="text-gray-900 text-base font-bold"
          >
            Paris Play Mat
          </Text>
          <View className="flex-row space-x-2">
            <Text className="justify-center  text-sm  text-gray-700">
              Ikoyi, Lagos
            </Text>
            <Text className="text-gray-700">|</Text>
            <Text className="text-gray-700 text-sm justify-center">
            4.9 (2.3k) 
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderCard;
