//import liraries
import React, { Component } from 'react';
import { View, Text,Image, StyleSheet } from 'react-native';
import { images } from '../../constants';

// create a component
const UserStory = () => {
    return (<View className='mx-1'>
      <Image source={images.womanbaby} className="h-14 w-14 border-orange-600 border-2 rounded-full" />
    </View>)
};

//make this component available to the app
export default UserStory;
