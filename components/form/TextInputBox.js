import { View, Text, TextInput, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Heroicons from "../../components/icons/Heroicons";
import CountryPicker from "react-native-country-picker-modal";

const { width } = Dimensions.get("window");

import { theme } from "../../constants";

const TextInputBox = ({
  label = "",
  iconName = "",
  showFlags = false,
  iconRight =false,
  name = "",
  placeholder = "",
  inputType = "",
  isPassword = false,
  error = "",
  numberOfLines = 0,
  password = "",
  onPress = () => {},
  onFocus = () => {},
  onCountrySelect = () => {},
  ...props
}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(isPassword);
  const [isFocused, setIsFocused] = React.useState(false);

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const [countryCode, setCountryCode] = useState('NG')
  const [country, setCountry] = useState(null)
  const [withCountryNameButton, setWithCountryNameButton] = useState(false)
  const [withFlag, setWithFlag] = useState(true)
  const [withEmoji, setWithEmoji] = useState(true)
  const [withFilter, setWithFilter] = useState(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState(false)
  const [withCallingCode, setWithCallingCode] = useState(true)
  const [countryModalVisible, setCountryModalVisible] = useState(false)
  const onSelect = (country) => {
    console.log('country>', country)
    onCountrySelect(country.callingCode[0])
    setCountryCode(country.cca2)
    setCountry(country)
  }

  return (
    <View className="flex-row mx-4">
      <View className="relative flex-1 ">
        <Text className={`${theme.LABEL.label1}`}>{label}</Text>
        <View
          className={`bg-gray-50 rounded-3xl p-4g h-16 px-4 overflow-hidden w-full flex-row align-middle items-center  ${iconRight?'flex-row-reverse':'flex-row'} ${
            isFocused ? "bg-orange-50 border border-orange-400" : ""
          }`}
        >
          {iconName && (
            <TouchableOpacity
              onPress={onPress}
              className={`items-center flex-row space-x-2  h-full justify-center`}
            >
              {
                showFlags && (
                  <CountryPicker
                    {...{
                      countryCode,
                      withFilter,
                      withFlag,
                      withCountryNameButton,
                      withAlphaFilter,
                      withCallingCode,
                      withEmoji,
                      onSelect,
                    }}
                    onClose={() => {
                      setCountryModalVisible(false);
                    }}
                    visible={countryModalVisible}
                  />
                )
              }
              <Heroicons
                size={20}
                color={isFocused ?theme.COLORS.primary:theme.COLORS.gray}
                iconName={iconName}
              />
            </TouchableOpacity>
          )}
          <View className={`${iconName && "ml-4"}`}>
            <TextInput
              onFocus={() => {
                onFocus();
                setIsFocused(true);
              }}
              name={name}
              onBlur={() => setIsFocused(false)}
              className="font-normal  text-lg min-w-9/10 -mt-1 min-h-full tracking-wider text-black bg-red-f300 h-auto w-auto flex-1 placeholder:text-sm"
              placeholder={placeholder}
              secureTextEntry={passwordVisibility}
              keyboardType={inputType}
              numberOfLines={numberOfLines || 1}
              multiline={!!numberOfLines}
              {...props}
            />
          </View>
          {isPassword && (
            <TouchableOpacity
              className="absolute top-6 right-4"
              onPress={handlePasswordVisibility}
            >
              {/* <Heroicons
                size={20}
                color={theme.COLORS.primary}
                iconName={passwordVisibility ? "EyeOffIcon" : "EyeIcon"}
              /> */}
            </TouchableOpacity>
          )}
        </View>
        <View>
          {error && (
            <Text
              style={{ marginTop: 7, color: theme.COLORS.red, fontSize: 12 }}
            >
              {error}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default TextInputBox;
