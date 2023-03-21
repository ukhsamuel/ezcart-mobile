import {
  View,
  Text,
  Keyboard,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

import { theme, images, COLORS } from "../../constants";
import {
  OutlineButton,
  OutlineSocialButton,
  PrimaryButton,
  PublicHeader,
  SocialAuthCard,
} from "../../components";
import TextInputBox from "../../components/form/TextInputBox";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import { signIn } from "../../states/actions/user";

const Login = ({ navigation }) => {
  const [errors, setErrors] = useState({});

  const detail = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();

  const [userDetail, setUserDetail] = useState(detail);

  const validate = async () => {
    console.log(userDetail);
    // console.log("userDetail>> ", userDetail);
    Keyboard.dismiss();
    let isValid = true;
    if (!userDetail.email) {
      handleError("Please input email address", "email");
      isValid = false;
    }
    if (!userDetail.password) {
      handleError("Please input password", "password");
      isValid = false;
    }
    // console.log(isValid);
    if (isValid) {
      login();
    }
  };
  


  const handleInputChange = (text, input) => {
    setUserDetail((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  
  const login = () => {
      dispatch(signIn(userDetail)).catch((err) => {
        console.log(err)
      });
  };
  return (
    <SafeAreaView className="bg-white pt-2 pb-4 relative flex-1">
      <PublicHeader />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View className="px-2 mt-2 pb-32 flex-1 flex-col h-auto">
          <View className="w-full items-center justify-center ">
            <Image
              source={images.logo}
              className="h-52 w-68"
              resizeMode="center"
            />
          </View>
          <View className=" items-center">
            <Text className="font-bold text-3xl text-black">
              Login to Your Account
            </Text>
          </View>
          <View className="mt-1">
            <TextInputBox
              name={`email`}
              placeholder="+000 000 0000"
              showFlags={true}
              iconName="ChevronDownIcon"
              // inputType="number-pad"
              inputType="default"
              onChangeText={text => handleInputChange(text, 'email')}
              error={errors.email}
            />
            <TextInputBox
              placeholder="Enter Password"
              iconName="lock-outline"
              isPassword={true}
              inputType="default"
              onChangeText={text => handleInputChange(text, 'password')}
              onFocus={() => handleError(null, "password")}
              error={errors.password}
            />
          </View>
          <View className="flex-row my-6 space-x-2 justify-center items-center">
            <Ionicons
              name="ios-square-outline"
              color={COLORS.primary}
              size={24}
            />
            <Text className="font-semibold">Remember me</Text>
          </View>
          <View>
          <PrimaryButton text="Sign in" onPress={login} />

            <Text className="text-center my-4 font-semibold text-gray-600 mt-8">
              or continue with
            </Text>
            <SocialAuthCard />
            <TouchableOpacity
              onPress={() => {
                navigation.push("Register");
              }}
              className=" border-slate-300  p-4"
            >
              <Text className="text-gray-500 font-normal text-center">
                Dont have an account?
                <Text className="font-bold text-orange-400"> Sign up</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    paddingBottom: 40,
  },
});
export default Login;
