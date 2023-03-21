import { View, Text, Keyboard, Image, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

import { theme, images, COLORS } from "../../constants";
import {
  OutlineButton,
  OutlineSocialButton,
  PrimaryButton,
  PublicHeader,
  SocialAuthCard,
} from "../../components";
import TextInputBox from "../../components/form/TextInputBox";
import Ionicons from "react-native-vector-icons/Ionicons";
import OtpInputBox from "../../components/form/OtpInputBox";

// create a component
const OtpVerification = ({navigation}) => {
    return (
        <SafeAreaView className="bg-white pt-2 pb-4 relative flex-1">
          <PublicHeader title="OTP Code Verification" />
          <ScrollView>
            <View className="px-2 mt-24 pb-8 flex-1 flex-col h-auto">
    
              <View className=" items-center">
                <Text className="text-base text-black">
                Code has been send to +234 814******63
                </Text>
                <OtpInputBox />
              </View>
              <View className="flex-row my-6 space-x-2 justify-center items-center">
                <Text className="">Resend code in <Text className="text-orange-400">55</Text> s</Text>
              </View>
              <View>
                <PrimaryButton  onPress={() => {navigation.push("Tabs")}}text="Verify" />
              </View>
            </View>
            <View></View>
          </ScrollView>
        </SafeAreaView>
    );
};

//make this component available to the app
export default OtpVerification;
