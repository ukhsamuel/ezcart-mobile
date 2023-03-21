//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import OrderCard from "../../cards/OrderCard";
import { theme, images } from "../../../constants";



const orders = [
  {
    name: "‘Chocolate Monster Milkshake’ Teether Set",
    img: images.choc,
    amount: "15,000.00",
    date: "April 29, 2022",
    location: 'Ikoyi',
    items: 3
  },

  {
    name: "All Cuddled Up – Teal",
    img: images.teal,
    amount: "35,000.00",
    date: "April 29, 2022",
    location: 'Ikoyi',
    items: 3
  },

  {
    name: "Ice Cream Cone – Only Brown Pillow Currently In Stock",
    img: images.icecream,
    amount: "12,000.00",
    date: "April 29, 2022",
    location: 'Ikoyi',
    items: 3
  },

  {
    name: "Bamboo Elephant Suction Plate and Fort Set Dusty Pink",
    img: images.elephant,
    amount: "25,600.00",
    date: "April 29, 2022",
    location: 'Ikoyi',
    items: 3
  },
];


const inactiveOrders = () => {
  return (
    <View className="flex-col h-96 w-full items-center pt-20 px-2">
      <Image
        resizeMode="contain"
        source={images.clipboard}
        className="h-72 w-full"
      />
      <Text className="mt-8 font-bold text-2xl">Empty</Text>
      <Text className="mt-4 text-base text-center">
        You do not have an active order at this time
      </Text>
    </View>
  );
};
// create a component
const CancelledOrdersSlide = () => {
    // return (
    //     <View className='pt-4'>
    //         <OrderCard status="cancelled" />
    //     </View>
    // );
    return (
      <View className="pt-4 flex-col">
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingBottom: 120,
          }}
          data={orders}
          renderItem={({ item }) => {
            return <OrderCard product={item} status="cancelled" />;
          }}
        />
        {/* <View className="w-full">
          { inactiveOrders() }
        </View> */}
      </View>
    )
};

export default CancelledOrdersSlide;
