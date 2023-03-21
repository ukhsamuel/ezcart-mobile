import { View, Text } from "react-native";
import React, { useLayoutEffect, useState, useRef } from "react";
// import OTPTextView from "react-native-otp-textinput";
import { StyleSheet } from "react-native";
import { theme } from "../../constants";

const OtpInputBox = ({ label="", onOtpChange = () => {} }) => {
  const otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  return (
    <View>
      <View className="mx-4">
        <Text className={`${theme.LABEL.label1}`}>{label}</Text>
      </View>
      {/* <OTPTextView
        handleTextChange={(e) => {
          onOtpChange(e);
        }}
        containerStyle={styles.textInputContainer}
        textInputStyle={styles.roundedTextInput}
        inputCount={4}
        inputCellLength={1}
        tintColor={"#FFAB38"}
        keyboardType="numeric"
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  roundedTextInput: {
    height: 48,
    width: 70,
    fontSize: 20,
    marginHorizontal: 6,
    fontWeight: '600',
    borderRadius: 10,
    backgroundColor: theme.COLORS.gray100,
    color: theme.COLORS.main,
    borderBottomWidth: 1,
    borderWidth: 1,
    letterSpacing: 10,
    textAlign: "center",
    padding: 1,
  },
});

export default OtpInputBox;
