//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MembersHeader } from "../../../components";
import { BUTTON } from "../../../constants/theme";

const Refund = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-white relative flex-1">
      <MembersHeader title="Get a Refund" showBackButton={true} />
      <ScrollView nestedScrollEnabled={true} scrollEventThrottle={400}>
        <View className="p-4">
          <Text className="font-normal text-center text-base">
            Enter the amount of top up
          </Text>
          <View className="font-bold h-24 pt-4 px-8 rounded-3xl text-center items-center align-middle justify-center text-3xl mt-4  tracking-wider text-dark border-2 border-orange-400 w-auto flex-1">
            <TextInput
              className="font-bold my-4 text-dark w-48  placeholder:text-sm"
              placeholder="Input Amount"
              keyboardType="number-pad"
              style={[ {fontSize: 26, height: 48, alignItems:'center', justifyContent:'center'}]}

            />
          </View>
        </View>
      </ScrollView>
            <View className="border-t absolute bottom-0 right-0 left-0 border-gray-200 h-28 px-4 align-middle justify-center py-4">
              <TouchableOpacity 
            onPress={() => {
              navigation.push("StoreCheckoutOptions");
            }} className="rounded-full shadow-2xl border-orange-400 border bg-orange-400 p-4  disabled:opacity-50">
                <Text className={`${BUTTON.mainButtonText}`}>Continue</Text>
              </TouchableOpacity>
            </View>
    </SafeAreaView>
  );
};


//make this component available to the app
export default Refund;
