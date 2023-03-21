import { View, 
    TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import { theme, images, COLORS } from "../../constants";
import { StarIcon } from "react-native-heroicons/solid";
import { HeartIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";

const HomeStoreCard = ({store}) => {
  const navigation = useNavigation();
  const config = useSelector((state) => state.user.config);
// console.log(config.base_urls.banner_image_url + '/'+store.banner)
  return (
    <TouchableOpacity
    onPress={() => {
      navigation.navigate('StoreFront', { store })

      // navigation.navigate("StoreFront", {});
    }}  className="bg-white mr-3 shadow-lg shadow-slate-50 w-52 rounded-3xl p-4">
      {/* <View className=" bg-orange-400 w-14 h-8 items-center justify-center px-4 p-1 rounded-lg">
        <Text className=" text-white font-semibold">ADS</Text>
      </View> */}
      <View className="items-center mt-2">
        <Image 
        source={
          config && config.base_urls && config.base_urls.shop_image_url?
          {
          uri: config.base_urls.banner_image_url + '/'+store.banner,
        }:images.womanbaby} className="h-36 rounded-xl w-full" />
      </View>
      <View className=" pb-4">
        <Text className="font-bold text-lg mb-2 pt-2">
          {store.name}
        </Text>
        <View className="flex-row">
          <Text className="text-gray-600 justify-center">{store.location || 'Lagos'} |</Text>
          <View className="justify-center mx-1">
            <StarIcon color={COLORS.primary}  height={14} width={14} />
          </View>
          <Text className="justify-center text-gray-600">
            {store.rating || '4.8'} ({store.count || '4.19k'})
          </Text>
        </View>
        <View className="flex-row">
          <View className="mt-4">
            <HeartIcon color={COLORS.heartRed} height={28} width={28} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default HomeStoreCard