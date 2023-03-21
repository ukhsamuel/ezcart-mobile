import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
// import FastImage from "react-native-fast-image";
// import ExpoFastImage from 'expo-fast-image'
import { useAssets } from "expo-asset";
import Ionicons from "react-native-vector-icons/Ionicons";

const CreditBalanceCard = ({ mode = 0 }) => {
  const navigation = useNavigation();

  // const [assets] = useAssets([images.homeCard]);
  const [assets] = useAssets([
    require("../../assets/images/creditcardbg.png"),
    require("../../assets/images/creditcardbg.png"),
  ]);

  return (
    <>
      {mode == 0 ? (
        <View className="flex-1 h-48 items-center ">
          <View className="p-6 absolute space-y-4 top-6 z-50 left-6">
            <Text className="text-white text-lg font-bold">Mike Dean</Text>
            <View className="flex-column">
              <Text className="text-white mb-2 font-semibold">
                Your balance
              </Text>

              <Text className="font-bold text-white text-4xl">N200,0000</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CashoutHome");
                }}
                className="bg-white flex-row space-x-1 items-center p-2 justify-center align-middle w-24 rounded-2xl"
              >
                <Ionicons name="download" color={COLORS.black} size={16} />
                <Text className="text-dark font-semibold">Refund</Text>
              </TouchableOpacity>
            </View>
          </View>
          {assets ? (
            <Image
              resizeMode="cover"
              className="w-full relative mt-6 h-56 rounded-3xl"
              source={assets[0]}
            />
          ) : null}
        </View>
      ) : (
        <View className="flex-1 h-48 items-center ">
          <View className="p-6 absolute space-y-2 top-1 z-50 left-6">
            <View className="flex-col space-y-1">
              <Text className="text-white text-sm font-semibold">
                Your balance
              </Text>

              <Text className="font-semibold text-white text-2xl">N2,005,005.00</Text>
            </View>
            <View className="flex-col space-y-1">
              <Text className="text-white text-sm font-semibold">
                Available balance
              </Text>

              <Text className="font-semibold text-white text-2xl">N1,265,005.00</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("CashoutHome");
                }}
                className="bg-white flex-row space-x-1 items-center p-2 justify-center align-middle w-24 rounded-2xl"
              >
                <Ionicons name="download" color={COLORS.black} size={16} />
                <Text className="text-dark font-semibold">Withdraw</Text>
              </TouchableOpacity>
            </View>
          </View>
          {assets ? (
            <Image
              resizeMode="cover"
              className="w-full relative h-60 rounded-3xl"
              source={assets[0]}
            />
          ) : null}
        </View>
      )}
    </>
  );
};

export default CreditBalanceCard;
