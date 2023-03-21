//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme, images, COLORS } from "../../constants";
import Ionicons from "react-native-vector-icons/Ionicons";
import SegmentedControlTab from "react-native-segmented-control-tab";

// create a component
const CreatePost = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };

  return (
    <SafeAreaView className="bg-gray-100 pt-2 pb-4 relative flex-col space-y-8 px-4 flex-1">
      <View className="flex-row justify-between items-center">
        <TouchableOpacity>
          <Text className="text-orange-400 font-bold">Discard</Text>
        </TouchableOpacity>
        <View>
          <Text className="font-semibold text-lg">CREATE</Text>
        </View>
        <TouchableOpacity className="bg-orange-400 rounded-full w-auto px-4 py-2">
          <Text className="text-white font-bold">Publish </Text>
        </TouchableOpacity>
      </View>

      <View className="bg-white relative flex-row space-x-2 p-4 rounded-xl">
        <Image source={images.guy} className="h-8 w-8 rounded-full" />
        <TextInput
          className="font-normal  text-lg  text-black bgd-red-300 placeholder:text-sm"
          placeholder="What’s on your mind?"
          keyboardType="default"
          //   numberOfLines={numberOfLines}
          multiline={true}
        />
        <View className="bg-orange-400 absolute -bottom-4 right-2 flex-row space-x-2 py-2 w-24 rounded-full items-center justify-center">
          <TouchableOpacity>
            <Ionicons name="image-outline" color={COLORS.white} size={24} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="camera-outline" color={COLORS.white} size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="bg-white relative flex-row p-4 rounded-xl">
        <TextInput
          className="font-normal  text-lg  text-black bgd-red-300 placeholder:text-sm"
          placeholder="Content Summary/Title"
          keyboardType="default"
          //   numberOfLines={numberOfLines}
          multiline={false}
        />
      </View>
      <View>

      <View className="px-6">
              <SegmentedControlTab
                values={["Post", "Story"]}
                tabStyle={styles.tabStyle}
                activeTabStyle={styles.activeTabStyle}
                tabTextStyle={styles.tabTextStyle}
                selectedIndex={selectedIndex}
                onTabPress={handleIndexChange}
              />
            </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    borderColor: "#C4C4C4",
    // borderRadius: 20,
    color: "#F4900C",
    width: "90%",
    borderLeftWidth: 1,
    borderWidth:0
  },
  activeTabStyle: {
    backgroundColor: "#F4900C",
    borderWidth: 0,
  },
  tabTextStyle: {
    color: "#000000",
    fontWeight: "500",
    padding: 8,
    fontSize: 18,
  },
});

//make this component available to the app
export default CreatePost;
