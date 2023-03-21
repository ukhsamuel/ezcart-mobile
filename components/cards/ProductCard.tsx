import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme, images } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const ProductCard = ({product}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <TouchableOpacity 

    onPress={() => {
      navigation.navigate('StoreItem', { product })
    }}
     className="bg-white mt-3 mb-3 space-x-2 flex-row shadow-sm shadow-zinc-50 w-full rounded-3xl p-4">
      <View className="basis-4/12 justify-center ">
        <Image source={product.img} className="h-32 w-28 rounded-3xl" />
      </View>
      <View className="basis-8/12 pl-4 space-y-2 justify-center">
        <View className="bg-orange-400 rounded-md p-1 w-20 items-center justify-center">
          <Text className="text-white text-xs">Best Seller</Text>
        </View>
        <Text
          numberOfLines={2}
          className="text-dark text-base font-bold"
        >
          {product.name}
        </Text>
        <View>
          <Text className="text-orange-400 text-xl font-semibold justify-center">
            N{product.amount}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;



