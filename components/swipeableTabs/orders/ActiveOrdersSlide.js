//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import OrderCard from "../../cards/OrderCard";
import { theme, images } from "../../../constants";

// const orders = [{}, {}, {}, {}, {}, {}, {}];

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

// create a component
const ActiveOrdersSlide = ({mode}) => {
  return (
    <View className="flex-col">
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        data={orders}
        renderItem={({ item }) => {
          return <OrderCard product={item} status="active" mode={mode} />;
        }}
      />
      {/* <View className="w-full">
        { inactiveOrders() }
      </View> */}
    </View>
  );
};

export default ActiveOrdersSlide;
