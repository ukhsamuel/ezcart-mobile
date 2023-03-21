import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { ChevronLeftIcon, ChevronDownIcon } from "react-native-heroicons/solid";
import {
  BellIcon,
  ShoppingCartIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/outline";
import { theme, images, COLORS } from "../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Provider, useSelector } from "react-redux";
import { signOut } from "../../states/actions/user";
import { useDispatch } from "react-redux";

const MembersHomeHeader = ({
  title = "",
  showBackButton = false,
  showPhoto = false,
  hideTitle = false,
  location = "",
}) => {
  const navigation = useNavigation();
  const mode = useSelector((state) => state.user.userMode);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signOut());
  };
  return (
    <View className=" align-center h-16 bg-white flex-row space-x-2 items-center z-50">
      <TouchableOpacity className="basis-2/12 pl-4">
        <Image
          source={mode == 1?images.anisha:images.guy}
          className="h-12 w-12 rounded-full border border-orange-400"
        />
      </TouchableOpacity>
      <View className="basis-7/12">
        <TouchableOpacity
          className="flex-col"
          onPress={showBackButton && navigation.goBack}
        >
          <View className="flex-row">
            <View>
              <Text className="text-gray-800 font-light">{title}</Text>
              <Text
                className={`text-xl text-dark font-bold capitalize flex-row justify-center`}
              >
                {location}
                {/* |{mode} */}
              </Text>
            </View>
            <View className="justify-end pl-2">
              <Ionicons name="md-caret-down" color={COLORS.primary} size={24} />
            </View>
          </View>
        </TouchableOpacity>
        {showBackButton && (
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-0 left-3 "
          >
            <ChevronLeftIcon color={COLORS.primary} height={25} width={25} />
          </TouchableOpacity>
        )}
      </View>
      <View className="basis-3/12 flex-row justify-end pr-4">
        <View className="relative">
          <TouchableOpacity 
            onPress={() => {
              logout()
            }} className="border border-gray-300 rounded-full items-center justify-center w-12 h-12">
            <BellIcon color={COLORS.dark} height={25} width={25} />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity className="border border-gray-300 ml-2 rounded-full items-center justify-center w-10 h-10">
            <ShoppingBagIcon color={COLORS.dark} height={25} width={25} />
          </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default MembersHomeHeader;
