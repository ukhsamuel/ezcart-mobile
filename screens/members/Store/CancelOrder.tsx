//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { MembersHeader, PrimaryButton } from "../../../components";
import { theme, images, COLORS } from "../../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import TextInputBox from "../../../components/form/TextInputBox";
// import Modal from "react-native-modal";

const CancellationReasonCard = (name, isSelected) => {
  return (
    <View className="bg-white py-2 flex-col space-y-1 rounded-2xl">
      <View className="flex-row">
        <View className="basis-1/12 justify-center ">
          {isSelected && (
            <Ionicons name="radio-button-on" color={COLORS.primary} size={30} />
          )}
          {!isSelected && (
            <Ionicons
              name="radio-button-off"
              color={COLORS.primary}
              size={30}
            />
          )}
        </View>
        <View className="basis-9/12 pl-4 justify-center">
          <View className="flex-row space-x-4 px-2">
            <Text className="font-bold text-lg">{name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const OrderStatusSectionCard = () => {
  return (
    <View className="border-gray-200 border-t pb-8 flex-col space-y-1">
      {/* {OrderMetricsCard()} */}
      {CancellationReasonCard("Waiting for long time", true)}
      {CancellationReasonCard("Unable to contact vendor", false)}
      {CancellationReasonCard("Store denied to deliver to destination", false)}
      {CancellationReasonCard("Wrong address shown", false)}
      {CancellationReasonCard("The price is not reasonable", false)}
      {CancellationReasonCard("I want to order another store", false)}
      {CancellationReasonCard("I just want to cancel", false)}
    </View>
  );
};
// create a component
const CancelOrder = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const closeAlert = () => {
    // sign up the user and close the modal
    setIsModalVisible(() => !isModalVisible);
  };

  const showalert = () => {
    return (
      <View>
        {/* <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
        >
          <View className="absolute h-64 top-48 w-full rounded-3xl bg-white">
            <View className="flex-1 p-6">
              <View className="px-4 space-y-4">
                <Text className="text-orange-400 text-center font-bold text-2xl">
                  We’re so sad about your cancellation
                </Text>
                <Text className="text-gray-800 text-center text-base">
                We will continue to improve our service & satisfy you on the next order.
                </Text>
              </View>
              <View className="flex-row absolute bottom-4 left-6 right-0 w-full">
                <TouchableOpacity onPress={() => setIsModalVisible(false)} className="bg-orange-400 w-full mx-auto py-4 rounded-full">
                  <Text className="text-white font-bold text-center">OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal> */}
      </View>
    );
  };

  return (
    <SafeAreaView className="bg-white pb-10 flex-1">
      <MembersHeader title="Cancel Order" showBackButton={true} />
      {showalert()}
      <ScrollView className=" pb-16">
        <View className="px-4">
          <Text className="py-4 font-semibold text-lg">
            Please select the reason for cancellation:
          </Text>
          {OrderStatusSectionCard()}
          <Text className=" font-semibold text-lg">Others</Text>
          <TextInputBox numberOfLines={8} placeholder="Other reason..." />
        </View>
      </ScrollView>

      <View className="border-t flex-row bg-white absolute bottom-0 right-0 left-0 border-gray-200 h-28 px-4 align-middle justify-center py-4">
        <PrimaryButton onPress={() => setIsModalVisible(true)} text="Submit" />
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default CancelOrder;
