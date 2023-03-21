import { View, Text, Keyboard, Image, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

import { theme, images } from "../../constants";
import {
  OutlineButton,
  OutlineSocialButton,
  PrimaryButton,
  PublicHeader,
  SocialAuthCard,
} from "../../components";
import TextInputBox from "../../components/form/TextInputBox";


const SignupProfile = () => {
  return (
    <SafeAreaView className="bg-white pt-2 pb-4 relative flex-1">
      <PublicHeader title="Fill Your Profile" />
      <ScrollView>
        <View className="px-2 pb-8 flex-1 flex-col h-auto">
          <View className="w-full items-center">
            <Image
              source={images.avatar}
              className="h-52 w-52 rounded-full"
              resizeMode="center"
            />
          </View>
          <View className="mt-1  mb-4 ">
            <TextInputBox
              name={`fullName`}
              placeholder="Full Name"
              inputType="text"
            />

            <TextInputBox
              name={`phone`}
              placeholder="Nickname"
              inputType="text"
            />

            <TextInputBox
              name={`email`}
              iconRight={true}
              placeholder="Email"
              iconName="MailIcon"
              inputType="text"
            />
            <TextInputBox
              name={`phone`}
              placeholder="+000 000 0000"
              showFlags={true}
              iconName="ChevronDownIcon"
              inputType="number-pad"
            />

            <TextInputBox
              name={`email`}
              placeholder="Gender (optional)"
              inputType="text"
            />
          </View>
          <View>
            <PrimaryButton onPress={() => {}} text="Continue" />
          </View>
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignupProfile