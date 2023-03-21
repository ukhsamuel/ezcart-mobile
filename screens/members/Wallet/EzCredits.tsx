//import liraries
import React, { Component } from "react";
import { View,Image, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { CreditBalanceCard, MembersHeader, SectionHeader } from "../../../components";
import { images } from "../../../constants";

const TransactionCard = (name, address, amount='0') => {
    return (
      <View className="bg-white p-4 flex-col space-y-4">
        <View className="flex-row">
          <View className="basis-2/12 justify-center ">
            <Image
              source={images.cuddleclub}
              className="h-14 w-14 rounded-3xl mb-2"
            />
          </View>
          <View className="basis-7/12 pl-4 justify-end">
            <View className="flex-row space-x-4">
              <Text className="font-bold text-base">{name}</Text>
            </View>
            {address && (
              <Text
                numberOfLines={1}
                className="text-gray-800 text-md font-base pt-2 mb-2"
              >
                {address}
              </Text>
            )}
          </View>
          <View className="basis-3/12 space-y-2 justify-center align-middle  items-end">
            {amount && (
              <View className="">
                <Text className="text-dark font-bold text-xs">N{amount}</Text>
              </View>
            )}
            <Text className="text-center text-xs">Orders</Text>
          </View>
        </View>
      </View>
    );
  };

// create a component
const EzCredits = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <MembersHeader title="ezCredits" showBackButton={true} />

      <ScrollView nestedScrollEnabled={true} scrollEventThrottle={400}>
        <View className=" h-64 flex-1">
          <CreditBalanceCard />
        </View>
        <View className="px-4">
            <SectionHeader title="Transaction History" showButton={true} />
            <View className="flex-col space-y-4">
        {TransactionCard(
          "The Cuddle Club",
          "Dec 15, 2024 | 16:00 PM",
          '165,000.00'
        )}
        {TransactionCard(
          "Top Up E-Wallet",
          "Dec 14, 2024 | 16:00 PM",
          '125,000.00'
        )}
        {TransactionCard(
          "Zen Yoga Studio",
          "Dec 12, 2024 | 16:00 PM",
          '35,000.00'
        )}
      </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default EzCredits;
