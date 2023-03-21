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
import { MembersHeader } from "../../components";
import { theme, images, COLORS } from "../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";

const DeliveryAddressCard = () => {
    return (
      <View className="bg-white shadow-zinc-50 shadow p-4 flex-col space-y-4 rounded-2xl">
        <View className="border-b-2 pb-4 border-gray-100">
          <Text className="font-bold text-xl">Deliver To</Text>
        </View>
        <View className="flex-row">
          <View className="basis-2/12 justify-center ">
            <Image
              source={images.locationPin}
              className="h-14 w-14 rounded-3xl mb-2"
            />
          </View>
          <View className="basis-10/12 pl-4 justify-center">
            <View className="flex-row space-x-4">
              <Text className="font-bold text-xl">Home</Text>
            </View>
            <Text
              numberOfLines={2}
              className="text-gray-800 text-base font-base pt-2 mb-2"
            >
              2,Block B, XYZ Building, Ikoyi, Lagos, Nigeria. 23401
            </Text>
          </View>
        </View>
      </View>
    );
  };
  
  const GetDiscountCard = () => {
    return (
      <View className="bg-white shadow-zinc-50 p-4 py-6 flex-col space-y-4 rounded-2xl">
        <View className="flex-row">
          <View className="basis-1/12 justify-center align-middle">
            <Image source={images.discount} className="h-8 w-8 rounded-3xl" />
          </View>
          <View className="basis-8/12 pl-4 justify-center">
            <Text numberOfLines={2} className="text-xl font-normal">
                Discounts Used
            </Text>
          </View>
          <View className="basis-3/12 justify-center flex-row space-x-2">
            <View className="bg-orange-400 rounded-full p-1 w-16 items-center justify-center">
              <Text className="text-white text-sm">EASTER20</Text>
            </View>
            <Ionicons
              name="ios-chevron-forward"
              color={COLORS.primary}
              size={32}
            />
          </View>
        </View>
      </View>
    );
  };
  
  const OrderAmountCard = () => {
    return (
      <View className="bg-white  shadow-zinc-50 p-4 py-6 flex-col space-y-4 rounded-2xl">
        <View className="flex-row">
          <View className="basis-7/12 justify-center align-middle">
            <Text className="text-base">Subtotal</Text>
          </View>
          <View className="basis-5/12 pl-4 justify-end">
            <Text className="text-lg text-right font-semibold">N206,300</Text>
          </View>
        </View>
        <View className="flex-row">
          <View className="basis-7/12 justify-center align-middle">
            <Text className="text-base">Delivery Fee</Text>
          </View>
          <View className="basis-5/12 pl-4 justify-end">
            <Text className="text-lg text-right font-semibold">N3,000</Text>
          </View>
        </View>
        <View className="flex-row py-4  border-t border-gray-200">
          <View className="basis-7/12 justify-center align-middle">
            <Text className="text-base">Total</Text>
          </View>
          <View className="basis-5/12 pl-4 justify-end">
            <Text className="text-lg text-right font-semibold">N209,300.00</Text>
          </View>
        </View>
      </View>
    );
  };
  const OrderSummaryCard = () => {
    return (
      <View className="bg-white shadow-zinc-50 p-4 flex-col space-y-4 rounded-2xl">
        <View className="flex-row">
          <View className="basis-12/12">
            <Text className="font-bold text-xl">Order Summary</Text>
          </View>
        </View>
        <View className="flex-col">
          <OrderSummaryItemCard />
          <OrderSummaryItemCard />
          <OrderSummaryItemCard />
        </View>
      </View>
    );
  };
  const OrderSummaryItemCard = () => {
    return (
      <View className="flex-row border-t py-4 border-gray-200">
        <View className="basis-3/12 justify-center">
          <Image source={images.matpurple} className="h-20 w-20 rounded-2xl mb-2" />
        </View>
        <View className="basis-7/12 pl-4 justify-center">
          <View className="flex-col space-y-2">
            <Text numberOfLines={1} className="font-bold text-lg">
              Los Angeles Play Mate
            </Text>
            <Text className="text-orange-500 text-xl font-semibold text-left">
              N20,000
            </Text>
          </View>
        </View>
        <View className="basis-2/12 justify-center space-y-2 items-end flex-col">
          <TouchableOpacity className="border-orange-500 border w-8 h-8 items-center justify-center rounded-xl">
            <Text className="text-orange-500 text-sm ">1x</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
// create a component
const OrderDetails = ({ route,navigation }) => {

  const survey = route.params.survey;
    return (
        <SafeAreaView className="bg-gray-100 flex-1 pb-8">
          <MembersHeader title="Order" showBackButton={true} />
          <ScrollView
            nestedScrollEnabled={true}
            scrollEventThrottle={400}
            className="flex-1"
          >
            <View className="px-4 pb-8 flex-col space-y-8">
              {DeliveryAddressCard()}
              {OrderSummaryCard()}
              {GetDiscountCard()}
              {OrderAmountCard()}
            </View>
          </ScrollView>
          <View className="border-t border-gray-200 h-24 px-4 align-middle justify-center py-2">
                <TouchableOpacity 
                onPress={() => {
                  navigation.push("StoreDelivery");
                }}
                  className="rounded-full shadow-2xl border-orange-400 border bg-orange-400 p-4  disabled:opacity-50"
                >
                  <Text className={`${theme.BUTTON.mainButtonText}`}>Place Order - N165,000.00</Text>
                </TouchableOpacity>
          </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default OrderDetails;
