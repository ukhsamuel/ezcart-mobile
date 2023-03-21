//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import StoreCoverPhotoHeader from "../../../components/headers/StoreCoverPhotoHeader";
import { theme, images, COLORS } from "../../../constants";
// import InputSpinner from "react-native-input-spinner";
import TextInputBox from "../../../components/form/TextInputBox";
import {
  StarIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "react-native-heroicons/solid";

// create a component
const StoreItem = ({ route, navigation }) => {
  const product = route.params.product;
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView className="pb-6">
        <StoreCoverPhotoHeader image={product.img} />
        <View className="w-full flex-col px-4">
          <View className="py-4 justify-center">
            <Text className="font-bold text-xl">{product.name || '' }</Text>
          </View>
          <TouchableOpacity 
             className="flex-row h-16 py-2 border-b border-gray-200 ">
            <View className="basis-1/12 h-full justify-center">
              <StarIcon color={COLORS.primary} height={25} width={25} />
            </View>
            <View className="basis-1/12 h-full justify-center">
              <Text className="font-bold text-lg">{3.4}</Text>
            </View>
            <View className="basis-10/12 h-full px-2 justify-center">
              <Text className="text-base text-gray-700">({45} reviews)</Text>
            </View>
          </TouchableOpacity>
          <View className="py-4">
            <Text className="text-sm">
              Your baby is strolling down sunny beaches, into sunset boulevard
              and hanging out in Hollywood all while you sip your coffee in the
              comfort ..
            </Text>
          </View>
          <View className="py-2">
            {/* <InputSpinner
              className="mx-10 px-2 mb-8 mt-8 "
              min={0}
              fontSize={24}
              inputStyle={styles.incDecAmt}
              buttonPressStyle={styles.incDecBtnPressed}
              buttonTextStyle={styles.btnText}
              step={1}
              value={1}
              buttonFontSize={28}
              buttonTextColor="#FB9400"
              buttonStyle={styles.incDecBtn}
              colorLeft={COLORS.white}
              colorRight={COLORS.white}
              onChange={(num) => {
                // console.log(num);
                // handleOnAmountchange(num)
              }}
            /> */}
          </View>
          <View className="py-2">
            <TextInputBox
              name={`note`}
              placeholder="Note to Restaurant (optional)"
              inputType="text"
              numberOfLines={8}
              // onChangeText={text => handleInputChange(text, 'username')}
              // onChange={(e) => handleInputChange(e, "username")}
              // onFocus={() => handleError(null, "username")}
            />
          </View>
        </View>
      </ScrollView>
      <View className="bg-white h-24 px-4 align-middle justify-center py-2">
            <TouchableOpacity
            onPress={() => {
              navigation.push("StoreCheckout");
            }}
              className="rounded-full  border-orange-400 border bg-orange-400 p-4  disabled:opacity-50"
            >
              <Text className={`${theme.BUTTON.mainButtonText}`}>Add to Basket - N{product.amount}</Text>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    paddingTop: 10,
    borderColor: "grey",
    borderBottomWidth: 2,
  },
  button: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    color: "red",
  },
  modal: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  incDecBtn: {
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    //   padding:4,
    fontWeight: "800",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
  },
  incDecAmt: {
    fontWeight: "600",
    fontSize: 56,
    color: COLORS.black,
  },
  incDecBtnPressed: {
    color: "grey",
  },
  btnText: {
    fontSize: 46,
  },
});
//make this component available to the app
export default StoreItem;
