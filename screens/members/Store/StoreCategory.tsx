//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { ProductCard, SectionHeader } from "../../../components";
import { MembersHeader } from "../../../components";

// create a component
const StoreCategory = () => {
  return (
    <SafeAreaView className="bg-gray-100 flex-1">
      <MembersHeader title="Playtime" showBackButton={true} />

      <View className="px-4">
        <View>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default StoreCategory;
