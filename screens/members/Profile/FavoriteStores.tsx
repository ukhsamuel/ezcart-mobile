import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../../constants";
import { ScrollView } from "react-native-virtualized-view";
import { MembersHeader, StoreCard } from "../../../components";
import OrderCard from "../../../components/cards/OrderCard";

const orders = [{}, {}, {}, {}, {}, {}, {}];

// create a component
const FavoriteStores = () => {
  return (
    <SafeAreaView className="bg-white flex-1 relative">
      <MembersHeader title="My Favorite Stores" showBackButton={true} />

      <View className=" px-4 flex-col">
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 120,
          }}
          data={orders}
          renderItem={({ item }) => {
            return <StoreCard status="active" />;
          }}
        />
        {/* <View className="w-full">
        { inactiveOrders() }
      </View> */}
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
export default FavoriteStores;
