import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from 'react'
import { ActiveOrdersSlide, CompletedOrdersSlide, CancelledOrdersSlide ,MembersHeader } from "../../components";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { COLORS } from "../../constants";
import { ScrollView } from "react-native-virtualized-view";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ProductActions } from "../../states/actions";

const Orders = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);


  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };
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
    <SafeAreaView className="bg-white flex-1 relative">
      <MembersHeader title="Orders" showBackButton={true} showPhoto={true} />
    
      <View className="px-6 pb-16">
        {/* <ScrollView> */}

        <View>
          <SegmentedControlTab
            values={["Active", "Completed", "Cancelled"]}
            tabStyle={styles.tabStyle}
            activeTabStyle={styles.activeTabStyle}
            activeTabTextStyle={styles.activeTabTextStyle}
            tabTextStyle={styles.tabTextStyle}
            selectedIndex={selectedIndex}
            onTabPress={handleIndexChange}
          />
        </View>

        <View>
        {selectedIndex === 0 && <ActiveOrdersSlide />}
        {selectedIndex === 1 && <CompletedOrdersSlide />}
        {selectedIndex === 2 && <CancelledOrdersSlide />}
        </View>
        {/* </ScrollView> */}

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 
  tabStyle: {
    borderColor: "#C4C4C4",
    color: "#9E9E9E",
    fontWeight: "400",
    width: "90%",
    borderWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 3,
    borderRadius: 0,
    borderBottomColor: "#EEEEEE"
  },
  activeTabStyle: {
    backgroundColor: "#ffffff",
    color: "red",
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 3,
    borderBottomColor: COLORS.primary
  },
  
  activeTabTextStyle: {
    color: COLORS.primary,
    fontWeight: "600",
    padding: 8,
    fontSize: 16,
  },
  tabTextStyle: {
    color: "#9E9E9E",
    fontWeight: "600",
    padding: 8,
    fontSize: 16,
  },
});
export default Orders