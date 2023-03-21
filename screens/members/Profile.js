import { View, Text, Keyboard, Image, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, Switch } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { setMode } from "../../states/actions/user";

import { theme, images, COLORS } from "../../constants";
import {
  OutlineButton,
  OutlineSocialButton,
  PrimaryButton,
  PublicHeader,
  SocialAuthCard,
} from "../../components";
import TextInputBox from "../../components/form/TextInputBox";

const menuItems = [
  {
    icon: "heart-outline",
    name: "My Favorite ezStores",
  },
  {
    icon: "wallet-outline",
    name: "ezCredits",
  },
  {
    icon: "ios-flower-outline",
    name: "Special Offers & Promo",
  },
  {
    icon: "card-outline",
    name: "Payment Methods",
  },
];
const menuItemsb = [
  {
    icon: "heart-outline",
    name: "Order History",
  },
  {
    icon: "ios-flower-outline",
    name: "Special Offers & Promo",
  },
  {
    icon: "cash-outline",
    name: "ezStore Wallet",
  },
];
const menuItems2 = [
  {
    icon: "person-outline",
    name: "Profile",
  },
  {
    icon: "location-outline",
    name: "Address",
  },
  {
    icon: "notifications-outline",
    name: "Notification",
  },
  {
    icon: "information-outline",
    name: "Help Center",
  },
  {
    icon: "md-people-outline",
    name: "Invite Friends",
  },
];


const MenuItem = (icon, name, index) => {
  return (
    <View 
    key={index} className="bg-white py-4 flex-col space-y-4 rounded-2xl">
      <View className="flex-row">
        <View className="basis-1/12 justify-center ">
          <Ionicons name={icon} color={COLORS.dark} size={28} />
        </View>
        <View className="basis-9/12 pl-4 justify-center">
          <Text className="font-semibold text-base">{name}</Text>
        </View>
        <View className="basis-2/12 justify-center align-middle  items-end">
          <Ionicons
            name="ios-chevron-forward-outline"
            color={COLORS.gray}
            size={26}
          />
        </View>
      </View>
    </View>
  );
};

const Profile = () => {
  const [userType, setUserType] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();

  const selectUserType = (val) =>{
    console.log('val--', val)
    setIsEnabled(val)
    setUserType(isEnabled?1:0)
    console.log('token>>]]]',isEnabled?1:0)

    dispatch(setMode(val?1:0))

    // setMode(isEnabled)
  };

  return (
    <SafeAreaView className="bg-white pt-2 pb-4 relative flex-1">
      <PublicHeader title="Profile" />
      <ScrollView>
        <View className="px-2 pb-8 flex-1 flex-col space-y-2 h-auto">
          <View className="flex-row justify-between px-2">
            <Text className="font-bold text-lg">Selling Mode</Text>
            <Switch
              trackColor={{false: '#000000', true: '#FF981F'}}
              thumbColor={userType ? '#ffffff' : '#ffffff'}
              ios_backgroundColor="#000000"
              onValueChange={selectUserType}
              value={isEnabled}
            />
          </View>
          <View className=" align-center h-16 bg-white flex-row space-x-2 items-center z-50">
            <TouchableOpacity className="basis-2/12">
              <Image
                source={images.guy}
                className="h-12 w-12 rounded-full border border-orange-400"
              />
            </TouchableOpacity>
            <View className="basis-8/12">
              <View className="flex-col space-y-2">
                <Text
                  className={`text-xl text-dark font-bold capitalize flex-row justify-center`}
                >
                  Mike Dean
                </Text>
                <Text className="text-gray-800 font-light">
                  +234 814 892 2463
                </Text>
              </View>
            </View>

            <TouchableOpacity className="basis-2/12">
              <Ionicons name="md-pencil" color={COLORS.primary} size={24} />
            </TouchableOpacity>
          </View>
          <View className="mt-8 px-4 mb-4 ">
            <View className="border-t border-gray-100">
              {menuItems && menuItems.length
                ? (userType == 1?menuItemsb:menuItems).map((menu, i) => {
                    return MenuItem(menu.icon, menu.name,i);
                  })
                : null}
            </View>
            <View className="border-t border-gray-100">
              {menuItems2 && menuItems2.length
                ? menuItems2.map((menu, i) => {
                    return MenuItem(menu.icon, menu.name,i + 'b');
                  })
                : null}
            </View>

            {MenuItem("ios-log-out-outline", "Log Out", '553')}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
