import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme, images } from "../../constants";
import { StarIcon, HeartIcon } from "react-native-heroicons/solid";
// import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const VendorProductCard = ({name, photo}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
    onPress={() => {
      navigation.navigate('StoreItem')

      // navigation.navigate("StoreFront", {});
    }} className="bg-white mt-3 mb-3 space-x-3 flex-row border-b border-zinc-200 w-full rounded-3xl p-4">
      <View className="basis-4/12 items-center justify-gcenter align-d ">
        <Image
          source={photo}
          className="h-28 w-full rounded-xl"
        />
      </View>
      <View className="basis-8/12 justify-center space-y-4">
        <Text numberOfLines={1} className="text-dark text-lg font-semibold">
          {name}
        </Text>
        <View className="flex-row items-center space-x-2">
          <Text className="text-orange-400 text-lg font-bold justify-center">N20,000</Text>
          <StarIcon color="#EEEFF2" height={10} width={10} />
          <Text className="justify-center text-xs  text-gray-500">April 29, 2022</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default VendorProductCard;
