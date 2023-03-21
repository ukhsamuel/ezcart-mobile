//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { MembersHeader } from "../../../components/headers";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme, images, COLORS } from "../../../constants";

const menuItem = (icon, text) => {
  return (
    <View className="bg-white p-4 py-6 mt-3 mb-3 flex-row shadow-lg  shadow-zinc-100 w-full rounded-2xl">
      <View className="basis-1/12 justify-center items-center align-middle">
        <Ionicons name={icon} color={COLORS.primary} size={24} />
      </View>
      <View className="basis-8/12 justify-center align-middle pl-4">
        <Text className="text-dark text-xl font-semibold" numberOfLines={1}>
          {text}
        </Text>
      </View>
    </View>
  );
};
// create a component
const StoreContact = () => {
  return (
    <SafeAreaView className="bg-gray-100 flex-1">
      <MembersHeader title="Contact Seller" showBackButton={true} />
      <View className="px-4">
        {menuItem("headset", "Chat with Seller")}
        {menuItem("logo-whatsapp", "WhatsApp")}
        {menuItem("logo-instagram", "Instagram")}
        {menuItem("logo-facebook", "Facebook")}
        {menuItem("logo-twitter", "Twitter")}
        {menuItem("musical-note", "TikTok")}
      </View>
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
export default StoreContact;
