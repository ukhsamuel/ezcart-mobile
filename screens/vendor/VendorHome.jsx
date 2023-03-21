import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView as ScrollViewReact,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-virtualized-view";

import { SafeAreaView } from "react-native-safe-area-context";
import MembersHomeHeader from "../../components/headers/MembersHomeHeader";
import { theme, images } from "../../constants";
import { BUTTON } from "../../constants/theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { StarIcon, HeartIcon } from "react-native-heroicons/solid";
import {
  HomeStoreCard,
  HomeMenuCard,
  VendorProductCard,
  PostCard,
  SectionHeader,
  FilterOutlineButton,
  AnalyticsCard,
} from "../../components";

const menuItems = [
  {
    name: "Mum",
    img: images.menuIcon1,
  },

  {
    name: "Baby",
    img: images.menuIcon2,
  },

  {
    name: "Electronics",
    img: images.menuIcon3,
  },

  {
    name: "Homeware",
    img: images.menuIcon4,
  },

  {
    name: "Health",
    img: images.menuIcon5,
  },

  {
    name: "Beauty",
    img: images.menuIcon6,
  },
  {
    name: "Fashion",
    img: images.menuIcon11,
  },
  {
    name: "More",
    img: images.menuIcon13,
  },
];

const featuredProducts = [
  {
    name: "‘Chocolate Monster Milkshake’ Teether Set",
    img: images.choc,
    amount: "15,000.00",
    date: "April 29, 2022",
  },

  {
    name: "All Cuddled Up – Teal",
    img: images.teal,
    amount: "35,000.00",
    date: "April 29, 2022",
  },

  {
    name: "Ice Cream Cone – Only Brown Pillow Currently In Stock",
    img: images.icecream,
    amount: "12,000.00",
    date: "April 29, 2022",
  },

  {
    name: "Bamboo Suction Baby Bowl and Spoon – Dusty Pink",
    img: images.bamboo,
    amount: "23,200.00",
    date: "April 29, 2022",
  },

  {
    name: "Bamboo Elephant Suction Plate and Fort Set Dusty Pink",
    img: images.elephant,
    amount: "25,600.00",
    date: "April 29, 2022",
  },
];

const featuredStores = [
  {
    name: "Zen Yoga Studio",
    img: images.yogalogo,
  },

  {
    name: "The Cuddle Club",
    img: images.cuddleclub,
  },

  {
    name: "Dennis Yoga",
    img: images.yogalogo,
  },

  {
    name: "Henry Plants",
    img: images.cuddleclub,
  },

  {
    name: "Art Classes for Kids",
    img: images.cuddleclub,
  },
];
// create a component
const VendorHome = () => {
  return (
    <>
      <SafeAreaView
        style={styles.container}
        className="bg-white flex-1 pb-0 mb-0 relative"
      >
        <MembersHomeHeader
          title={`The Cuddle club`}
          showPhoto={true}
          showBackButton={false}
          location={"Central, Ikoyi"}
        />

        <ScrollView
          nestedScrollEnabled={true}
          scrollEventThrottle={400}
          className="flex-1"
        >
          <View>
            <View className="flex-col px-4 space-y-2 pb-2 mt-4">
              <Text
                className={`text-2xl text-dark font-bold capitalize flex-row justify-center`}
              >
                {"Hi, Anisha!"}
              </Text>
              <Text className="text-slate-400 font-extralight">
                Here’s how you’re doing
              </Text>
            </View>
            <View className="flex-row space-x-2 px-4 mb-4">
              <AnalyticsCard
                icon="cash-outline"
                title="Income"
                amount="N105k"
                info="- 0,5% from last week"
              />
              <AnalyticsCard
                icon="cart-outline"
                title="Total Order"
                amount="N15k"
                info="+ 1,0% from last week"
              />
            </View>
            <View className="flex-row space-x-2 px-4">
              <AnalyticsCard
                icon="pricetag-outline"
                title="Income"
                amount="N105k"
                info="- 0,5% from last week"
              />
              <AnalyticsCard
                icon="eye-outline"
                title="Impressions"
                amount="3.2K"
                info="- 25% from last week"
              />
            </View>

            <View className="px-4">
              <SectionHeader title="Recent Sales" showButton={false} />
            </View>
            <View className="px-4">
              {featuredProducts.map((option, index) => (
                <VendorProductCard
                  name={option.name}
                  photo={option.img}
                  key={index}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  featuredImg: {
    shadowColor: "#96e7f7",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
});

//make this component available to the app
export default VendorHome;
