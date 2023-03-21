//import liraries
import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MembersHeader } from "../../../components/headers";
// import { Rating, AirbnbRating } from "react-native-ratings";
import { theme, images, COLORS } from "../../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  CommentCard,
  ProgressBar,
  FilterOutlineButton,
} from "../../../components";

// create a component
const StoreReviews = () => {

    const [progress, setProgress] = useState(new Animated.Value(0));
    const [progress2, setProgress2] = useState(new Animated.Value(0));
    const [progress3, setProgress3] = useState(new Animated.Value(0));
    const [progress4, setProgress4] = useState(new Animated.Value(0));
    const [progress5, setProgress5] = useState(new Animated.Value(0));

    const progressAnim = progress.interpolate({
        inputRange: [0,5],
        outputRange: ["0%", "100%"],
      });  
      
      const progressAnim2 = progress2.interpolate({
        inputRange: [0,5],
        outputRange: ["0%", "100%"],
      });
      
      const progressAnim3 = progress3.interpolate({
        inputRange: [0,5],
        outputRange: ["0%", "100%"],
      });

      
      const progressAnim4 = progress4.interpolate({
        inputRange: [0,5],
        outputRange: ["0%", "100%"],
      });


      
      const progressAnim5 = progress5.interpolate({
        inputRange: [0,5],
        outputRange: ["0%", "100%"],
      });


  useEffect(() => {
    setProgressBar()
  }, []);


  const setProgressBar = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    Animated.timing(progress2, {
        toValue: 3,
        duration: 1000,
        useNativeDriver: false,
      }).start();

      Animated.timing(progress3, {
        toValue: 5,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      Animated.timing(progress4, {
        toValue: 4,
        duration: 1000,
        useNativeDriver: false,
      }).start();
      Animated.timing(progress5, {
        toValue: 2,
        duration: 1000,
        useNativeDriver: false,
      }).start();
  };


  const renderProgressBar = () => {
    return <ProgressBar progressAnim={progressAnim} />;
  };

  const renderProgressBar2 = () => {
    return <ProgressBar progressAnim={progressAnim2} />;
  };

  const renderProgressBar3 = () => {
    return <ProgressBar progressAnim={progressAnim3} />;
  };

  const renderProgressBar4 = () => {
    return <ProgressBar progressAnim={progressAnim4} />;
  };

  const renderProgressBar5 = () => {
    return <ProgressBar progressAnim={progressAnim5} />;
  };


  return (
    <SafeAreaView className="bg-gray-100 flex-1">
      <MembersHeader showBackButton={true} />
    <ScrollView
    
    nestedScrollEnabled={true}
    scrollEventThrottle={400}
    className="flex-1"
    >
      <View className="px-4">
        <View className="py-6">
          <Text className="font-bold text-3xl">The Cuddle Club</Text>
        </View>
      </View>
      <View className="flex-row h-60 py-4 border-b border-t border-gray-200 ">
        <View className="basis-5/12 p-4 items-center border-r border-gray-200 ">
          <Text className="font-bold text-5xl mb-4">4.0</Text>
          {/* <AirbnbRating
            count={5}
            defaultRating={4}
            showRating={false}
            isDisabled={false}
            selectedColor="#FB9400"
            size={20}
          /> */}
          <Text className="mt-4 text-lg">(4.8k reviews)</Text>
        </View>
        <View className="basis-7/12 p-4 py-2">
        <View className="my-2 items-center flex-row">
            <Text className="font-bold text-xl mr-2">5</Text>
              {renderProgressBar5()}
          </View>
          <View className="my-1 items-center flex-row justify-center align-middle">
            <Text className="font-bold text-xl mr-2">4</Text>
              {renderProgressBar4()}
          </View>
          <View className="my-1 items-center flex-row justify-center align-middle">
            <Text className="font-bold text-xl mr-2">3</Text>
              {renderProgressBar3()}
          </View>
          <View className="my-1 items-center flex-row justify-center align-middle">
            <Text className="font-bold text-xl mr-2">2</Text>
              {renderProgressBar2()}
          </View>
          <View className="my-1 items-center flex-row justify-center align-middle">
            <Text className="font-bold text-xl mr-2">1</Text>
              {renderProgressBar()}
          </View>
        </View>
      </View>
      <View className="pt-4">
        <View className="px-4">
          <Text className="font-bold text-2xl mb-4">Overview</Text>
          <Text className="font-light text-md mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
            ad. Read more...
          </Text>

          <View className="flex-row h-24 py-4  border-b border-gray-200">
            <View className="basis-6/12 ">
              <Text className="text-lg font-semibold mb-2">
                Monday - Friday
              </Text>
              <Text className="text-lg font-semibold">Saturday - Sunday</Text>
            </View>
            <View className="basis-6/12">
              <Text className="text-lg font-semibold text-orange-400 mb-2">
                <Text className="text-black font-light">: </Text> 10:00 - 22.00
              </Text>
              <Text className="text-lg font-semibold text-orange-400">
                <Text className="text-black font-light">: </Text> 12:00 - 20.00
              </Text>
            </View>
          </View>
          <View>
            <View className="py-4">
              <Text className="font-bold text-2xl">Address</Text>
            </View>

            <View className=" flex-row">
              <Ionicons name="md-location" color={COLORS.primary} size={24} />
              <Text className="text-xl ml-2 text-gray-800">
                Ikoyi, Lagos, Nigeria.
              </Text>
            </View>
          </View>
          <View className=" py-4  border-b border-t mt-4 border-gray-200">
            <ScrollView
              horizontal
              contentContainerStyle={{}}
              showsHorizontalScrollIndicator={false}
              className="py-2"
            >
              <FilterOutlineButton icon="sort" text="Sort by" />
              <FilterOutlineButton icon="star" text="5" />
              <FilterOutlineButton icon="star" text="4" />
              <FilterOutlineButton icon="star" text="3" />
              <FilterOutlineButton icon="star" text="2" />
              <FilterOutlineButton icon="star" text="1" />
            </ScrollView>
          </View>
          <View>
            <CommentCard />
            <CommentCard />
            <CommentCard />
          </View>
        </View>
      </View>

    </ScrollView>
    </SafeAreaView>
  );
};

export default StoreReviews;
