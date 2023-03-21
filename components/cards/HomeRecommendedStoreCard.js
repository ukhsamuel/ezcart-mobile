import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme, images } from "../../constants";
import { StarIcon, HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { UtilityService } from "../../services/utility-service";
import { useSelector, useDispatch } from "react-redux";

const HomeRecommendedStoreCard = ({product}) => {
  const config = useSelector((state) => state.user.config);

  const navigation = useNavigation();
  const calculateAverage = (arr) =>{
    return arr.reduce((a, {average}) => a + average, 0) / arr.length;
  }
  // console.log(config.base_urls.product_image_url + '/'+ images[0])
  return (
    <TouchableOpacity 
    onPress={() => {
      navigation.navigate('StoreItem',{product})

      // navigation.navigate("StoreFront", {});
    }} className="bg-white mt-3 mb-3 space-x-2 flex-row shadow-sm shadow-zinc-50 w-full rounded-3xl p-4 py-4">
      <View className="basis-5/12  justify-center align-middle ">
        <Image
        source={
          config && config.base_urls && config.base_urls.product_image_url?
          {
          uri: config.base_urls.product_image_url + '/'+ product.images[0],
        }:images.womanbaby}
          className="h-28 w-28 rounded-3xl"
        />
      </View>
      <View className="basis-7/12 justify-center space-y-4">
        <Text numberOfLines={1} className="text-dark text-base font-bold">
          {product.name}
        </Text>
        <View className="flex-row align-middle space-x-2">
          <Text className="text-gray-600 text-xs justify-center capitalize">{product.location || 'n/a'}</Text>
          <Text className="text-gray-400 text-xs font-light">|</Text>
          <View className="justify-center">
            <StarIcon color="#FB9400" height={18} width={18} />
          </View>
          <Text className="justify-center text-xs  text-gray-600">{calculateAverage(product.rating)} ({product.rating.length})</Text>
        </View>
        <View className="flex-row items-center space-x-2">
          <Text className="text-orange-400 text-lg font-bold justify-center">N{product.purchase_price}</Text>
          <Text className="text-gray-400 text-lg font-light">|</Text>
          <View className="justify-center">
          <HeartIcon color="#FF4D67" height={24} width={24} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeRecommendedStoreCard;
