import { View, Image, Text } from "react-native";
import React from "react";
// import { StarIcon, HeartIcon } from "react-native-heroicons/solid";
// import { Rating, AirbnbRating } from "react-native-ratings";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme, images, COLORS } from "../../constants";

const SocialFeedCard = () => {
  return (
    <View className="mt-4 mb-4 h-46 flex-col bg-white shadow-sm p-4  shadow-cyan-50 w-full rounded-3xl">
      <View className="flex-row space-x-2">
        <View className="justify-center items-centser align-middle">
          <Image source={images.womanbaby} className="h-8 w-8 rounded-full" />
        </View>
        <View className="justify-center align-middle pl-1">
          <Text className="text-dark text-sm font-bold" numberOfLines={1}>
            Susan Adeyemo
          </Text>
          <Text className="text-gray-600 text-xs " numberOfLines={1}>
            Ikoyi, Lagos
          </Text>
        </View>
      </View>
      <View className="py-4">
        <Text className="text-dark text-md leading-6">
          Excellent items. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor 😍😍
        </Text>
      </View>
      <View className="flex-row">
        <View className="basis-3/12 flex-row items-center">
          <Ionicons name="heart-outline" color={COLORS.red} size={24} />
          <Text className="text-xs font-semibold ml-2">834</Text>
        </View>
      </View>
    </View>
  );
};


export default SocialFeedCard;
