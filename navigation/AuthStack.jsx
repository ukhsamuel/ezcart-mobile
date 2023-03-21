import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Tutorial from "../screens/public/Tutorial";
import { Login, OtpVerification, Register, Welcome } from "../screens/public";
// import { Profile } from "../screens/memberss";

const AuthStack = createNativeStackNavigator();

const AuthScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <AuthStack.Screen name="Welcome" component={Welcome} /> */}
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="OtpVerification" component={OtpVerification} />
      {/* <AuthStack.Screen name="Profile" component={Profile} /> */}
    </AuthStack.Navigator>
  );
};

export default AuthScreen;
