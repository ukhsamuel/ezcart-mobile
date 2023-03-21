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
import { AltPrimaryButton, MembersHeader } from "../../components";
import { theme, images, COLORS } from "../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ProductActions } from "../../states/actions";


const MessageCard = (name, address, msgsCount=0) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity  onPress={() => {
      navigation.navigate("ChatPage");
    }}
     className="bg-white p-4 flex-col space-y-4 rounded-2xl">
      <View className="flex-row">
        <View className="basis-2/12 justify-center ">
          <Image
            source={images.cuddleclub}
            className="h-14 w-14 rounded-3xl mb-2"
          />
        </View>
        <View className="basis-8/12 pl-4 justify-end">
          <View className="flex-row space-x-4">
            <Text className="font-bold text-base">{name}</Text>
          </View>
          {address && (
            <Text
              numberOfLines={1}
              className="text-gray-800 text-md font-base pt-2 mb-2"
            >
              {address}
            </Text>
          )}
        </View>
        <View className="basis-2/12 space-y-2 justify-center align-middle  items-end">
          {msgsCount && (
            <View className="bg-orange-400 flex rounded-full w-6 h-6 items-center align-middle justify-center">
              <Text className="text-white text-sm">{msgsCount}</Text>
            </View>
          )}
          <Text className="text-center text-xs">16:02</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Message = ({ navigation }) => {
  const user = useSelector((state) => state.AuthReducers);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // console.log("Screen is focused");
      dispatch(ProductActions.getCategories());
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView className="bg-white relative flex-1 pb-8">
      <MembersHeader title="Message" showBackButton={false} />
      <View className="px-4 flex-col space-y-2">
        {MessageCard(
          "The Cuddle Club",
          "Great! I will arrive soon...",
          3
        )}
        {MessageCard(
          "Little Picassos Nigeria",
          "My order hasn’t arrived yet 🤔",
          3
        )}
        {MessageCard(
          "Zen Yoga Studio",
          "omg, this is amazing 🤩"
        )}
      </View>
    </SafeAreaView>
  );
};

export default Message;
