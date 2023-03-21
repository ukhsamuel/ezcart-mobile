import { View, Image, Text } from "react-native";
import React from "react";
import { StarIcon, HeartIcon } from "react-native-heroicons/solid";
// import { Rating, AirbnbRating } from "react-native-ratings";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme, images, COLORS } from "../../constants";

const CommentCard = () => {
  return (
    <View className="mt-4 mb-4 h-46 flex-col shadow-lg  shadow-zinc-100 w-full rounded-3xl">
      <View className="flex-row">
        <View className="basis-2/12 justify-center items-center align-middle">
          <Image source={images.womanbaby} className="h-14 w-14 rounded-full" />
        </View>
        <View className="basis-5/12 justify-center align-middle pl-1">
          <Text className="text-dark text-lg font-bold" numberOfLines={1}>
            Susan Adeyemo
          </Text>
        </View>
        <View className="basis-5/12 pl-1 flex-row align-middle items-center justify-center">
          {/* <AirbnbRating
            count={5}
            defaultRating={4}
            showRating={false}
            isDisabled={false}
            selectedColor="#FB9400"
            size={16}
          /> */}
          <View className="ml-2">
            <Ionicons
              name="ellipsis-horizontal-circle"
              color={COLORS.black}
              size={28}
            />
          </View>
        </View>
      </View>
      <View className="py-4">
        <Text className="text-dark text-lg">
          Excellent items. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor 😍😍
        </Text>
      </View>
      <View className="flex-row">
        <View className="basis-3/12 flex-row items-center">
          <Ionicons name="heart-outline" color={COLORS.red} size={24} />
          <Text className="text-lg ml-2">834</Text>
        </View>
        <View className="basis-4/12 flex-row items-center">
            <Text className="text-lg text-gray-700">2 weeks ago</Text>
        </View>
      </View>
    </View>
  );
};

{
  /* <Text className="text-gray-800 text-lg mb-4"  numberOfLines={2}>
We are offering free baby yoga classes tuesday from 8AM - 9AM.
</Text>
<View className="flex-row">
<Text className="text-orange-500 text-lg font-bold justify-center">Read More <Text className="text-black font-light px-4">|</Text></Text>
<View className="justify-center mx-1">
  <HeartIcon color="#FF4D67" height={28} width={28} />
</View>
</View> */
}

export default CommentCard;
