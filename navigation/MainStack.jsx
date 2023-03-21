import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  DocumentIcon,
  ClockIcon,
  HomeIcon,
  CashIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolid,
  CashIcon as CashIconSolid,
  DocumentIcon as DocumentIconSolid,
  ClockIcon as ClockIconSolid,
  ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisIconSolid,
  UserIcon as UserIconSolid,
} from "react-native-heroicons/solid";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, FONTS, SIZES, icons, images } from "../constants";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
  Home,
  Credits,
  Message,
  Orders,
  Profile,
  EzFeed,
} from "../screens/members";
import { VendorHome, VendorOrders, VendorWallet } from "../screens/vendor";
import { Provider, useSelector } from "react-redux";

const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const OrdersStack = createNativeStackNavigator();
const MessageStack = createNativeStackNavigator();
const CreditStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

const TabIcon = ({ name }) => {
  return name == "HomeSolid" ? (
    <MaterialIcons
      name="home-variant"
      color={COLORS.primary}
      size={SIZES.tabIcon}
    />
  ) : // <HomeSolid color={COLORS.primary} size={SIZES.tabIcon} />
  name == "HomeIcon" ? (
    <MaterialIcons
      name="home-variant-outline"
      color={COLORS.gray3}
      size={SIZES.tabIcon}
    />
  ) : // <HomeIcon color={COLORS.gray3} size={SIZES.tabIcon} />
  name == "CashIconSolid" ? (
    <CashIconSolid color={COLORS.primary} size={SIZES.tabIcon} />
  ) : name == "CashIcon" ? (
    <CashIcon color={COLORS.gray3} size={SIZES.tabIcon} />
  ) : name == "ChatBubbleOvalLeftEllipsisIconSolid" ? (
    <ChatBubbleOvalLeftEllipsisIconSolid
      color={COLORS.primary}
      size={SIZES.tabIcon}
    />
  ) : name == "ChatBubbleOvalLeftEllipsisIcon" ? (
    <ChatBubbleOvalLeftEllipsisIcon color={COLORS.gray3} size={SIZES.tabIcon} />
  ) : name == "WalletIonicons" ? (
    <Ionicons name="wallet-outline" color={COLORS.gray3} size={SIZES.tabIcon} />
  ) : name == "WalletIoniconsSolid" ? (
    <Ionicons name="wallet" color={COLORS.primary} size={SIZES.tabIcon} />
  ) : name == "UserIconSolid" ? (
    <UserIconSolid color={COLORS.primary} size={SIZES.tabIcon} />
  ) : name == "UserIcon" ? (
    <UserIcon color={COLORS.gray3} size={SIZES.tabIcon} />
  ) : name == "DocsIonicons" ? (
    <Ionicons
      name="document-text-outline"
      color={COLORS.gray3}
      size={SIZES.tabIcon}
    />
  ) : name == "DocsIoniconsSolid" ? (
    <Ionicons
      name="document-text"
      color={COLORS.primary}
      size={SIZES.tabIcon}
    />
  ) : (
    <HomeIcon color={COLORS.gray3} size={SIZES.tabIcon} />
  );
};

const TabButton = ({ focused, name, iconName }) => {
  return (
    <TouchableOpacity
      style={{ alignItems: "center", justifyContent: "center" }}
    >
      <TabIcon name={iconName} />
      <Text
        className="font-bold"
        style={{
          color: focused ? COLORS.primary : COLORS.gray3,
          ...FONTS.body5,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const HomeStackScreen = () => {
  const mode = useSelector((state) => state.user.userMode);

  return (
  
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeStack.Screen name="HomeTab" component={mode == 1?VendorHome:Home} />
  </HomeStack.Navigator>
)};

const OrdersStackScreen = () => {
  const mode = useSelector((state) => state.user.userMode);
  return (
  <OrdersStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <OrdersStack.Screen name="OrdersTab" component={mode == 1?Orders:VendorOrders} />
  </OrdersStack.Navigator>
)};

const MessageStackScreen = () => (
  <MessageStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <MessageStack.Screen name="MessageTab" component={Message} />
  </MessageStack.Navigator>
);

const CreditStackScreen = () => (
  <CreditStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <CreditStack.Screen name="EzFeedTab" component={EzFeed} />
    <CreditStack.Screen name="CreditsTab" component={Credits} />
  </CreditStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <ProfileStack.Screen name="ProfileScreenTab" component={Profile} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => {

  
  const mode = useSelector((state) => state.user.userMode);

  return (<Tabs.Navigator
    screenOptions={{
      tabBarShowLabel: true,
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        height: Platform.OS === "ios" ? 100 : 60,
        backgroundColor: "#fff",
        borderTopColor: "#DADADA",
        // paddingVertical:5
      },
      tabBarActiveTintColor: "#FF981F",
      tabBarInactiveTintColor: "#555",
      tabBarLabelStyle: {
        fontSize: 13,
        fontWeight: '600',
        paddingBottom: 8
      }
    }}
  >
    <Tabs.Screen
      name="Dashboard"
      component={mode == 1?VendorHome:Home}
      options={{
        headerShown: false,
        tabBarLabel:"Home",
        tabBarIcon: ({ focused }) => {
          return <MaterialIcons name={focused?'home-variant':'home-variant-outline'} color={focused?COLORS.primary:COLORS.gray} size={24} />
        }
      }}
    />

    <Tabs.Screen
      name="OrdersHome"
      component={mode == 1?VendorOrders:Orders}
      options={{
        headerShown: false,
        tabBarLabel:"Orders",
        tabBarIcon: ({ focused }) => {
          return <MaterialIcons name={focused?'file-document':'file-document-outline'} color={focused?COLORS.primary:COLORS.gray} size={24} />
        }
      }}
    />

    <Tabs.Screen
      name="MessageHome"
      component={Message}
      options={{
        headerShown: false,
        tabBarLabel:"Messages",
        tabBarIcon: ({ focused }) => {
          return <MaterialIcons name={focused?'chat-processing':'chat-processing-outline'} color={focused?COLORS.primary:COLORS.gray} size={24} />
        }
      }}
    />
    {/*  */}
    <Tabs.Screen
      name="CreditSection"
      component={EzFeed}
      options={{
        headerShown: false,
        tabBarLabel:"EzFeed",
        tabBarIcon: ({ focused }) => {
          return <MaterialIcons name={focused?'earth-box':'earth-box'} color={focused?COLORS.primary:COLORS.gray} size={24} />
        }
      }}
    />
    <Tabs.Screen
      name="ProfileScreen"
      component={Profile}
      options={{
        headerShown: false,
        tabBarLabel:"Profile",
        tabBarIcon: ({ focused }) => {
          return <MaterialIcons name={focused?'account':'account-outline'} color={focused?COLORS.primary:COLORS.gray} size={24} />
        }
      }}
    />
  </Tabs.Navigator>)
};

export default TabsScreen;
