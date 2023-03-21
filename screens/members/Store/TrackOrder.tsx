//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { MembersHeader } from "../../../components";
import { theme, images, COLORS } from "../../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";

const OrderMetricsCard = () => {
  return (
    <View className="bg-white justify-between flex-row space-x-4 p-4 px-10 rounded-3xl">
      <View className="flex-col space-y-2 items-center">
        <Image
          source={images.rating}
          className="h-16 w-16 rounded-3xl mb-2"
        />
        <Text className="font-bold text-lg">4.8</Text>
        <Text className="text-gray-600 text-md">Ratings</Text>
      </View>
      <View className="flex-col space-y-2 items-center">
        <Image
          source={images.basket}
          className="h-16 w-16 rounded-3xl mb-2"
        />
        <Text className="font-bold text-lg">24</Text>
        <Text className="text-gray-600 text-md">Orders</Text>
      </View>
      <View className="flex-col space-y-2 items-center">
        <Image
          source={images.clock}
          className="h-16 w-16 rounded-3xl mb-2"
        />
        <Text className="font-bold text-lg">4</Text>
        <Text className="text-gray-600 text-md">Months</Text>
      </View>
    </View>
  );
};

const OrderAmountCard = () => {
  return (
    <View className="bg-white  shadow-zinc-50 p-4 py-6 flex-col space-y-4 rounded-2xl">
      <View className="flex-row">
        <View className="basis-5/12 justify-center align-middle">
          <Text className="text-base">Amount Paid</Text>
        </View>
        <View className="basis-7/12 pl-4 justify-end">
          <Text className="text-lg text-right font-semibold">N206,300</Text>
        </View>
      </View>
      <View className="flex-row">
        <View className="basis-5/12 justify-center align-middle">
          <Text className="text-base">Delivery Fee</Text>
        </View>
        <View className="basis-7/12 pl-4 justify-end">
          <Text className="text-lg text-right font-semibold">
            Wed, 15th Feb, 2023
          </Text>
        </View>
      </View>
      <View className="flex-row">
        <View className="basis-5/12 justify-center align-middle">
          <Text className="text-base">Tracking Number</Text>
        </View>
        <View className="basis-7/12 pl-4 justify-end">
          <Text className="text-lg text-right font-semibold">#001002AR</Text>
        </View>
      </View>
    </View>
  );
};

const OrderStatusCard = (name, isSelected) => {
  return (
    <View className="bg-white p-4 flex-col space-y-4 rounded-2xl">
      <View className="flex-row">
        <View className="basis-2/12 justify-center ">
          <Image
            source={images.locationPin}
            className="h-14 w-14 rounded-3xl mb-2"
          />
        </View>
        <View className="basis-9/12 pl-4 justify-center">
          <View className="flex-row space-x-4 px-2">
            <Text className="font-bold text-lg">{name}</Text>
          </View>
        </View>
        <View className="basis-1/12 justify-center ">
          {isSelected && (
            <Ionicons
              name="checkbox-outline"
              color={COLORS.primary}
              size={30}
            />
          )}
          {!isSelected && (
            <Ionicons name="square-outline" color={COLORS.primary} size={30} />
          )}
        </View>
      </View>
    </View>
  );
};

const OrderStatusSectionCard = () => {
  return (
    <View className="px-4 pb-8 flex-col space-y-8">
      {OrderMetricsCard()}
      {OrderStatusCard("Order Placed", true)}
      {OrderStatusCard("Order Accepted", false)}
      {OrderStatusCard("Order Shipped", false)}
      {OrderStatusCard("Order Delivered", false)}
    </View>
  );
};

// create a component
const TrackOrder = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-gray-100 pb-10 flex-1">
      <MembersHeader title="Track Order" showBackButton={true} />
      <ScrollView className=" pb-16">
        <Text className="text-center py-4 font-bold text-2xl">
          The Cuddle Club
        </Text>
        {OrderStatusSectionCard()}
        <View className="px-4 pb-24">{OrderAmountCard()}</View>
      </ScrollView>

      <View className="border-t flex-row space-x-4 bg-white absolute bottom-0 right-0 left-0 border-gray-200 h-28 px-4 align-middle justify-center py-4">
        <TouchableOpacity 
         onPress={() => {
            navigation.push("CancelOrder");
          }}
        className="rounded-full w-16 h-16 items-center justify-center shadow-2xl bg-red-400 p-4  disabled:opacity-50">
          <Ionicons name="close-outline" color={COLORS.white} size={32} />
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full w-16 h-16 items-center justify-center shadow-2xl bg-orange-400 p-4  disabled:opacity-50">
          <Ionicons name="ios-chatbubble-ellipses" color={COLORS.white} size={32} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default TrackOrder;
