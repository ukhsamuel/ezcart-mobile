import { View, Image, Text } from "react-native";
import React from "react";
import { theme, images, COLORS } from "../../constants";
import { StarIcon, HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

const PostCard = ({post}) => {
  const config = useSelector((state) => state.user.config);
  return (
    <View className="bg-white mt-3 mb-3 flex-row shadow-sm  mr-10 space-x-4 overflow-hidden shadow-zinc-50 w-80 rounded-3xl p-4">
      <View className="basis-4/12 justify-center items-center align-middle">
        <Image
        
        source={
          config && config.base_urls && config.base_urls.product_image_url?
          {
          uri: config.base_urls.product_image_url + '/'+ images[0],
        }:images.womanbaby}
         className="h-28 w-28 rounded-3xl" />
      </View>
      <View className="basis-8/12 space-y-2 justify-center">
        <Text
          className="text-dark text-xl font-bold"
          numberOfLines={1}
        >
          {post.name}
        </Text>
        <Text className="text-gray-600 text-xs"  numberOfLines={2}>
        {post.details}
        </Text>
        <View className="flex-row items-center space-x-2 align-middle">
          <Text className="text-orange-400 text-xs font-bold">Read More </Text>
          {/* <Text className="text-black font-light">|</Text>
          <View className="justify-center">
            <HeartIcon color={COLORS.heartRed} height={20} width={20} />
          </View> */}
        </View>
      </View>
    </View>
  );
};

export default PostCard;
