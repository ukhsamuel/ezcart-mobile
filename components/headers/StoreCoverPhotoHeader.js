import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme, images, COLORS } from "../../constants";
import { TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { ArrowLeftIcon, ChevronLeftIcon } from "react-native-heroicons/solid";
import { BellIcon, HeartIcon, PaperAirplaneIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const StoreCoverPhotoHeader = ({image}) => {
  const navigation = useNavigation();

  return (
    <View  className="relative h-96">

    <View className=" align-center h-16 pt-4 flex-row items-center z-50">
      <View className="basis-9/12">
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolhute top-0 left-3 "
          >
            <ArrowLeftIcon color={COLORS.white} height={25} width={25} />
          </TouchableOpacity>
      </View>
        <View className="basis-3/12 justify-end px-6 flex-row">
          <TouchableOpacity>
            <HeartIcon color={COLORS.white} height={25} width={25} />
          </TouchableOpacity>
          <TouchableOpacity className="ml-4">
            <PaperAirplaneIcon color={COLORS.white} height={25} width={25} />
          </TouchableOpacity>

        </View>


    </View>
      <View className="bg-gray-100 h-96 align-bottom justify-end   w-full absolute top-0">
        <View className="items-center">
                  <Image source={image} resizeMode="cover" className="h-96 w-full" />

        </View>
      </View>
    </View>
   
  );
};

export default StoreCoverPhotoHeader;
