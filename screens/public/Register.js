import { View, Text, Keyboard, Image,
  TextInput, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { signUp } from "../../states/actions/user";

import { theme, images } from "../../constants";
import {
  OutlineButton,
  OutlineSocialButton,
  PrimaryButton,
  PublicHeader,
  SocialAuthCard,
} from "../../components";
import TextInputBox from "../../components/form/TextInputBox";

// const Register = ({ navigation }) => {
//   const [inputs, setInputs] = React.useState({
//     country: "",
//     email: "",
//     f_name: "",
//     l_name: "",
//     phone: "",
//     password: "",
//   });
const Register = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({"country": "", "email": "tapeam.ehgnt@gmail.comer", "f_name": "Sam ", "l_name": "Joe", "password": "f@dsff1213133", "phone": "8172732923"});
  const [errors, setErrors] = React.useState({
    country: "",
    email: "",
    f_name: "",
    l_name: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [showOtp, setShowOtp] = React.useState(false);
  const [ussdDialed, setUssdDialed] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  const otpInput = useRef(null);
  const [count, setCount] = useState(0);
  const [interval, setIntervalVal] = useState(null);

  const dispatch = useDispatch();

  const handleOnchange = (text, input) => {
    // console.log(text);
    // console.log(input);
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const register = () => {
    console.log('inputs>',inputs);
    // let p ='+' + inputs.country + inputs.phone;
    // inputs.phone = p;

    let payload = {
      country: inputs.country,
      email: inputs.email,
      f_name: inputs.f_name,
      l_name: inputs.l_name,
      phone: '+' + inputs.country + inputs.phone,
      password: inputs.password,
    }
    console.log('payload>',payload);

    dispatch(signUp(payload))
    .then(() => {
      console.log(765)
      setShowOtp(true)
      // history.push('/auth/verify-account');
    })
    .catch((err) => {
      console.log('err>>',err)
      // history.push('/auth/verify-account');
    });
  };

  return (
    <SafeAreaView className="bg-white pt-2 pb-4 relative flex-1">
      <PublicHeader />
      <ScrollView>
        <View className="px-2 pb-8 flex-1 flex-col h-auto">
          <View className="w-full items-center">
            <Image
              source={images.logo}
              className="h-52 w-68"
              resizeMode="contain"
            />
          </View>
          <View className=" items-center">
            <Text className="font-bold text-3xl text-black">
              Create New Account
            </Text>
          </View>
          <View className="mt-1  mb-4 ">
            <TextInputBox
              name={`phone`}
              placeholder="+000 000 0000"
              showFlags={true}
              iconName="ChevronDownIcon"
              inputType="number-pad"
              onChangeText={(text) => handleOnchange(text, "phone")}
              onCountrySelect={(text) => handleOnchange(text, "country")}
              onFocus={() => handleError(null, "phone")}
              error={errors.phone}
            />
            <TextInputBox
              name={`email`}
              placeholder="Email"
              iconName="MailIcon"
              inputType="email-address"
              onChangeText={(text) => handleOnchange(text, "email")}
              onFocus={() => handleError(null, "email")}
              error={errors.email}
            />

            {/* <TextInputBox
              name={`phone`}
              placeholder="Full Name"
              iconName="UserIcon"
              inputType="text"
            /> */}

            <TextInputBox
              placeholder="Enter First Name"
              iconName="UserIcon"
              inputType="default"
              onChangeText={(text) => handleOnchange(text, "f_name")}
              onFocus={() => handleError(null, "f_name")}
              error={errors.f_name}
            />
            <TextInputBox
              placeholder="Enter Last Name"
              iconName="UserIcon"
              inputType="default"
              onChangeText={(text) => handleOnchange(text, "l_name")}
              onFocus={() => handleError(null, "l_name")}
              error={errors.l_name}
            />
            <TextInputBox
              placeholder="Password"
              iconName="lock"
              isPassword={true}
              inputType="default"
              onChangeText={(text) => handleOnchange(text, "password")}
              onFocus={() => handleError(null, "password")}
              error={errors.password}
            />
          </View>
          <View>
            <PrimaryButton onPress={register} text="Sign up" />
            <Text className="text-center my-4 font-semibold text-gray-600 mt-8">
              or continue with
            </Text>
            <SocialAuthCard />
            <TouchableOpacity className=" border-slate-300  p-4">
              <Text className="text-gray-500 font-normal text-center">
                Already have an account?
                <Text className="font-bold text-orange-400"> Sign in</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
