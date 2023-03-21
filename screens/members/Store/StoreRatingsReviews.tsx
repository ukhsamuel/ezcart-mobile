//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MembersHeader } from '../../../components/headers';

// create a component
const StoreRatingsReviews = () => {
    return (
        <View>
            <Text>StoreReviews</Text>
            <MembersHeader title={`Hi,`}  showBackButton={true} />

        </View>
    );
};


//make this component available to the app
export default StoreRatingsReviews;
