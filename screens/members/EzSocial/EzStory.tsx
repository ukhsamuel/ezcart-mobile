//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";
import { UserStory } from "../../../components";
import { images } from "../../../constants";

const storiesBar = () => {
 return ( <View className=" py-4  border-b border-t mt-4 border-gray-200">
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingVertical: 20
      }}
      showsHorizontalScrollIndicator={false}
      className="py-2 "
    >
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
      <UserStory />
    </ScrollView>
  </View>)
};
// create a component
const EzStory = () => {
  return (
    <SafeAreaView className="bg-gray-100 flex-1">
    <View>
      {storiesBar()}
    </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default EzStory;
