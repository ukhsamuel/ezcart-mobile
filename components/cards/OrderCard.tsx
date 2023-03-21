import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { theme, images } from "../../constants";
import { StarIcon, HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const OrderCard = ({ status = "completed", mode = 0, product }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  return (
    <View className="bg-white mb-6 h-auto flex-col shadow-sm shadow-zinc-50 w-full rounded-3xl p-2">
      <View className="w-full space-x-2 flex-row">
        <View className="basis-3/12 items-center h-36 justify-center align-middle ">
          <Image
            source={product.img}
            className="h-24 w-full rounded-3xl mb-2"
          />
        </View>
        <View className="basis-9/12 align-middle justify-center space-y-2">
          <Text numberOfLines={1} className="text-gray-900 text-base font-bold">
            {product.name}
          </Text>
          <View className="flex-row">
            <Text className="text-gray-800 text-sm justify-center">
            {product.items} items |
            </Text>
            <Text className="justify-center ml-2 text-sm  text-gray-800">
            {product.location}
            </Text>
          </View>
          <View className="flex-row">
            <View className="justify-center">
              <Text className="text-orange-500 text-sm font-bold justify-center">
                N{product.amount}
              </Text>
            </View>
            <View className="pl-4">
              {status && status == "cancelled" && (
                <TouchableOpacity className="rounded-lg border border-red-400 bg-white p-1 px-2">
                  <Text
                    className={`text-center text-xs font-normal text-red-400`}
                  >
                    Cancelled
                  </Text>
                </TouchableOpacity>
              )}
              {status && status == "active" && (
                <TouchableOpacity className="rounded-lg border-2 border-orange-400 bg-orange-400 p-1 px-2">
                  <Text
                    className={`text-center text-xs font-normal text-white`}
                  >
                    {mode ? "Paid with ezSecure" : "Paid"}
                  </Text>
                </TouchableOpacity>
              )}
              {status && status == "completed" && (
                <TouchableOpacity className="rounded-lg border-2 border-orange-400 bg-orange-400 p-1 px-2">
                  <Text
                    className={`text-center text-xs font-normal text-white`}
                  >
                    Completed
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
      {status && (status == "completed" || status == "active") && (
        <View className="w-full border-t-2 border-gray-200 flex-row">
          {status && status == "completed" && (
            <View className="w-full pt-4 flex-row">
              <View className="w-1/2 pr-2">
                <TouchableOpacity className="rounded-3xl border-2 border-orange-400 bg-white p-2">
                  <Text
                    className={`text-center text-xs font-semibold text-orange-400`}
                  >
                    Leave a Review
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="w-1/2 pl-2">
                <TouchableOpacity className="rounded-3xl border-2 border-orange-400 bg-orange-400 p-2">
                  <Text
                    className={`text-center text-xs font-semibold text-white`}
                  >
                    Order Again
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          {status && status == "active" && (
            <View className="w-full pt-4 flex-row">
              <View className="w-1/2 pr-2">
                <TouchableOpacity className="rounded-3xl border-2 border-orange-400 bg-white p-2">
                  <Text
                    className={`text-center text-xs font-semibold text-orange-400`}
                  >
                    {mode ? "Reject Order" : "Contact Seller"}
                  </Text>
                </TouchableOpacity>
              </View>
              <View className="w-1/2 pl-2">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("OrderDetails", { product });
                  }}
                  className="rounded-3xl border-2 border-orange-400 bg-orange-400 p-2"
                >
                  <Text
                    className={`text-center text-xs font-semibold text-white`}
                  >
                    {mode ? "Manage Order" : "Track Order"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default OrderCard;
