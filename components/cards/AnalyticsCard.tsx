//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme, images, COLORS } from "../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";

// create a component
const AnalyticsCard = ({icon="cart-outline",title="", amount="", info=""}) => {
    return (
        <View className='bg-white shadow-sm shadow-gray-50 rounded-2xl w-40 mx-1 p-2 flex-col'>
        <View className='flex-row items-center space-x-1 py-2 border-b border-slate-100'>
          <Ionicons name={icon} color={COLORS.primary} size={24} />
            <Text className='font-semibold text-base'>{title}</Text>
        </View>
            <View className='flex-col space-y-1 py-2'>
                <Text className='font-bold text-4xl'>{amount}</Text>
                <Text className='font-semibold text-sm text-gray-400'>{info}</Text>
            </View>
        </View>
    );
};

//make this component available to the app
export default AnalyticsCard;
