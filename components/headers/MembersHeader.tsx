import { View, Text } from "react-native";
import React from "react";
import { theme, images, COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { ChevronLeftIcon, ArrowLeftIcon } from "react-native-heroicons/solid";
import Ionicons from "react-native-vector-icons/Ionicons";

const MembersHeader = ({
  title = "",
  showBackButton = true,
  hideTitle = false,
}) => {
  const navigation = useNavigation();

  return (
    <View className="pt-4 align-center h-16 flex-row items-center z-50">
      <View className="basis-5/7">
        <TouchableOpacity onPress={showBackButton && navigation.goBack}>
          <Text
            className={`text-xl text-black ${
              showBackButton ? "pl-12" : "pl-6"
            } font-bold capitalize`}
          >
            {hideTitle ? "" : title}
          </Text>
        </TouchableOpacity>
        {showBackButton && (
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-1 left-3 "
          >
            <ArrowLeftIcon color={COLORS.black} height={25} width={25} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MembersHeader;
