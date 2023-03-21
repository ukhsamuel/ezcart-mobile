import { View, Text, Keyboard, StyleSheet, Image, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

import { theme, images } from "../../constants";
import { OutlineButton, PrimaryButton, PublicHeader } from "../../components";

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white pt-2 pb-4 relative flex-1">
      {/* <View className=" flex-col flex-1 "> */}
        <PublicHeader />
        <ScrollView contentContainerStyle={styles.contentContainer}>

        <View className="px-2 flex-1 flex-col">
          <View className="w-full items-center">
            <Image
              source={images.welc}
              className="h-52 w-52"
              resizeMode="center"
            />
          </View>
          <View className="mt-4 mb-4 items-center">
            <Text className="font-bold text-4xl text-black">Sign In</Text>
          </View>
          <View className="space-x-2">
            <OutlineButton img={images.facebook} onPress={() => {}} text="Continue with Facebook" />
            <OutlineButton img={images.google} onPress={() => {}} text="Continue with Google" />
            <OutlineButton img={images.apple} onPress={() => {}} text="Continue with Apple" />
            <Text className="text-center my-4">or</Text>
            <PrimaryButton onPress={() => {navigation.push("Login");}} text="Sign in with Phone Number" />
            <TouchableOpacity  
            onPress={() => {
              navigation.push("Register");
            }}  className=" border-slate-300  p-4">
              <Text className="text-gray-400 font-normal text-center">Don't have an account? <Text className=" text-orange-400">Sign up</Text></Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      {/* </View> */}

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    // paddingVertical: 20,
    marginBottom: 40
  }
});

export default Welcome;
