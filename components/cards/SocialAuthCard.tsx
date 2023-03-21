//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OutlineSocialButton from '../buttons/OutlineSocialButton';
import { theme, images, COLORS } from "../../constants";

// create a component
const SocialAuthCard = () => {
    return (
        <View className="flex-row h-20 px-4 items-center w-full mb-4">
          <View className="w-1/3">
            <OutlineSocialButton onPress={() => {}} img={images.facebook} />
          </View>
          <View className="w-1/3">
            <OutlineSocialButton onPress={() => {}} img={images.google} />
          </View>
          <View className="w-1/3">
            <OutlineSocialButton onPress={() => {}} img={images.apple} />
          </View>
        </View>
    );
};



//make this component available to the app
export default SocialAuthCard;
