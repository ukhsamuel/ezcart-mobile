//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import  MembersHeader  from "../../../components/headers/MembersHeader";
import TextInputBox from "../../../components/form/TextInputBox";
import { theme, images, COLORS } from "../../../constants";

// create a component
const BankDetails = ({navigation}) => {
  return (
    <SafeAreaView className="bg-white relative flex-1 pb-8">
      <MembersHeader title="Enter Bank Details" showBackButton={true} />
      <View className="px-2 pb-8 flex-1 flex-col h-auto">
        <TextInputBox
          name={`phone`}
          placeholder="Enter Account Name"
          inputType="text"
        />
         <TextInputBox
          name={`text`}
          placeholder="Enter Bank Name"
          inputType="text"
        />
         <TextInputBox
          name={`phone`}
          placeholder="Select Bank"
          inputType="text"
        />
         <TextInputBox
          name={`phone`}
          placeholder="How do you want this account displayed?"
          inputType="text"
        />
      </View>
            <View className="border-t absolute bottom-0 right-0 left-0 border-gray-200 h-28 px-4 align-middle justify-center py-4">
              <TouchableOpacity 
            onPress={() => {
              navigation.push("StoreCheckoutOptions");
            }} className="rounded-full shadow-2xl border-orange-400 border bg-orange-400 p-4  disabled:opacity-50">
                <Text className={`${theme.BUTTON.mainButtonText}`}>Update</Text>
              </TouchableOpacity>
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
export default BankDetails;
