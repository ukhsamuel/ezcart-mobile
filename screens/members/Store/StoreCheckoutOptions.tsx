//import liraries
import React, { Component, useState } from "react";
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

const DeliveryAddressCard = (name,img, address, isSelected, isDefault) => {
    return (
      <View className="bg-white shadow-zinc-50 shadow p-4 flex-col space-y-4 rounded-2xl">
        <View className="flex-row">
          <View className="basis-2/12 justify-center ">
            <Image
              source={img}
              className="h-14 w-14 rounded-3xl mb-2"
            />
          </View>
          <View className="basis-9/12 pl-4 justify-center">
            <View className="flex-row space-x-4">
              <Text className="font-bold text-base">{name}</Text>
            </View>
            {address && (
              <Text
                numberOfLines={2}
                className="text-gray-800 text-xs font-base pt-2 mb-2"
              >
                {address}
              </Text>
            )}
          </View>
          <View className="basis-1/12 justify-center ">
            {isSelected && (
              <Ionicons
                name="ios-radio-button-on"
                color={COLORS.primary}
                size={32}
              />
            )}
            {!isSelected && (
              <Ionicons
                name="ios-radio-button-off"
                color={COLORS.primary}
                size={32}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

const DiscountCard = (name, img, address, isSelected) => {
    return (
      <View className="bg-white p-4 flex-col space-y-4 rounded-2xl">
        <View className="flex-row">
          <View className="basis-2/12 justify-center ">
            <Image
              source={img}
              className="h-16 w-16 rounded-3xl mb-2"
            />
          </View>
          <View className="basis-9/12 pl-4 justify-center">
            <View className="flex-row space-x-4">
              <Text className="font-bold text-lg">{name}</Text>
            </View>
            {address && (
              <Text
                numberOfLines={2}
                className="text-gray-800 text-lg font-base pt-2 mb-2"
              >
                {address}
              </Text>
            )}
          </View>
          <View className="basis-1/12 justify-center ">
            {isSelected && (
              <Ionicons
                name="ios-radio-button-on"
                color={COLORS.primary}
                size={32}
              />
            )}
            {!isSelected && (
              <Ionicons
                name="ios-radio-button-off"
                color={COLORS.primary}
                size={32}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

const PaymentTypeCard = (name, img, isSelected) => {
  return (
    <View className="bg-white p-4 flex-col space-y-4 rounded-2xl">
      <View className="flex-row">
        <View className="basis-2/12 justify-center ">
          <Image
            source={img}
            className="h-8 w-8 mb-2"
            resizeMode="contain"
          />
        </View>
        <View className="basis-9/12 pl-2 justify-center">
          <View className="flex-row space-x-4">
            <Text className="font-bold text-lg">{name}</Text>
          </View>
        </View>
        <View className="basis-1/12 justify-center ">
          {isSelected && (
            <Ionicons
              name="ios-radio-button-on"
              color={COLORS.primary}
              size={32}
            />
          )}
          {!isSelected && (
            <Ionicons
              name="ios-radio-button-off"
              color={COLORS.primary}
              size={32}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const WalletPaymentCard = (isSelected) => {
  return (
    <View className="bg-white p-4 flex-col space-y-4 rounded-2xl">
      <View className="flex-row">
        <View className="basis-2/12 align-middle justify-center ">
          <Image
            source={images.wallet}
            className="h-6 w-6"
          />
        </View>
        <View className="basis-9/12 pl-4 justify-center">
          <View className="flex-row space-x-6 items-center">
            <Text className="font-bold text-lg">ezCredits</Text>
            <Text className="font-bold text-md">N50,000.00</Text>
          </View>
        </View>
        <View className="basis-1/12 justify-center ">
          {isSelected && (
            <Ionicons
              name="ios-radio-button-on"
              color={COLORS.primary}
              size={32}
            />
          )}
          {!isSelected && (
            <Ionicons
              name="ios-radio-button-off"
              color={COLORS.primary}
              size={32}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const StageOne = () => {
  return (
    <View className="px-4 pb-8 flex-col space-y-8">
      {DeliveryAddressCard(
        "Checkout with ezSecure",
        images.shield
        ,
        "Your order will be secured by ezCart from payment to delivery.",
        true,
        true
      )}
      {DeliveryAddressCard(
        "Pay to Vendor",
        images.shield
        ,
        "Your order will be handled completely by the vendor from payment to delivery.",
        false,
        false
      )}
    </View>
  );
};

const StageTwo = () => {
  return (
    <View className="px-4 pb-8 flex-col space-y-6">
      {WalletPaymentCard(false)}
      {PaymentTypeCard("•••• •••• •••• •••• 4679", images.mastercard, true)}
      {PaymentTypeCard("Paystack", images.paystack, false)}
      {PaymentTypeCard("Google Pay", images.google, false)}
    </View>
  );
};

const StageThree = () => {
  return (
    <View className="px-4 pb-8 flex-col space-y-8">
      {DiscountCard(
        "New User Promo",
        images.discount1,
        "Only valid for new users",
        false
      )}
      {DiscountCard(
        "Discount 20% OFF",
        images.discount2,
        "20% discount on all menus",
        true
      )}
      {DiscountCard(
        "Free Delivery Fee",
        images.discount3,
        "Free delivery max $4.00",
        false
      )}
      {DiscountCard(
        "Weekend Special",
        images.discount3,
        "Free delivery max $4.00",
        false
      )}
      {DiscountCard(
        "Year End Promo",
        images.discount3,
        "Free delivery max $4.00",
        false
      )}
    </View>
  );
};

// create a component
const StoreCheckoutOptions = ({ navigation }) => {
    const [stage, setStage] = useState(1);

    const incrementStage = () => {
        console.log(stage)
        let s = stage;
        let ns = 0;
        if(s <= 2){
            ns = s + 1;

            setStage(ns)
        }else{

            navigation.push("TrackOrder");
        }

        console.log('ns', ns)


    }
  return (
    <SafeAreaView className="bg-gray-100 flex-1 pb-8">
      <MembersHeader title="Payment Methods" showBackButton={true} />
      <ScrollView className="">
      { stage == 1 && StageOne()}
      { stage == 2 && StageTwo()}
      { stage == 3 && StageThree()}
        <View className="px-2 pb-24">
          <AltPrimaryButton text="Add New Card" />
        </View>
      </ScrollView>

      <View className="border-t bg-gray-100 absolute bottom-0 right-0 left-0 border-gray-200 h-28 px-4 align-middle justify-center py-4">
        <TouchableOpacity onPress={() => {
              incrementStage()
            }} className="rounded-full shadow-2xl border-orange-400 border bg-orange-400 p-4  disabled:opacity-50">
          <Text className={`${theme.BUTTON.mainButtonText}`}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default StoreCheckoutOptions;
