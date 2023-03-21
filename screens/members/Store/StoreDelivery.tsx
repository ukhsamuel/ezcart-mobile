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
import { AltPrimaryButton, MembersHeader } from "../../../components";
import { theme, images, COLORS } from "../../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";


const DeliveryAddressCard = (name,address,isSelected, isDefault) => {
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
            <View className="flex-row space-x-4">
              <Text className="font-bold text-xl">{name}</Text>
              {isDefault && <View className="bg-green-100 rounded-lg p-1 w-20 items-center justify-center">
                <Text className="text-orange-400 text-base">Default</Text>
              </View>}
            </View>
            {address && <Text
              numberOfLines={1}
              className="text-gray-800 text-md font-base pt-2 mb-2"
            >
              {address}
            </Text>}
          </View>
          <View className="basis-1/12 justify-center ">
            {isSelected && <Ionicons
              name="ios-radio-button-on"
              color={COLORS.primary}
              size={30}
            />}
            {!isSelected && <Ionicons
              name="ios-radio-button-off"
              color={COLORS.primary}
              size={30}
            />}
          </View>
        </View>
      </View>
    );
  };

// create a component
const StoreDelivery = ({ navigation }) => {
    return (
        <SafeAreaView className="bg-gray-100 relative flex-1 pb-8">
          <MembersHeader title="Deliver to" showBackButton={true} />
          <View className="px-4 pb-8 flex-col space-y-6">
          {DeliveryAddressCard('Home','2,Block B, XYZ Building, Ikoyi, Lagos',true,true)}
          {DeliveryAddressCard('Self-Pickup','',false, false)}
          {DeliveryAddressCard('My Office','2,Block B, XYZ Building, Ikoyi, Lagos',false, false)}
          {DeliveryAddressCard('My Apartment','2,Block B, XYZ Building, Ikoyi, Lagos',false, false)}

            <AltPrimaryButton text="Add New Address" />
          </View>
            <View className="border-t absolute bottom-0 right-0 left-0 border-gray-200 h-28 px-4 align-middle justify-center py-4">
              <TouchableOpacity 
            onPress={() => {
              navigation.push("StoreCheckoutOptions");
            }} className="rounded-full shadow-2xl border-orange-400 border bg-orange-400 p-4  disabled:opacity-50">
                <Text className={`${theme.BUTTON.mainButtonText}`}>Apply</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
      );
};

//make this component available to the app
export default StoreDelivery;
