import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { QrcodeIcon } from 'react-native-heroicons/solid';
import { theme } from "../../constants";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ScanFab = () => {
    const navigation = useNavigation();
  return (
    <View className="absolute  bottom-10 right-0 w-48 z-50">
      <TouchableOpacity disabled onPress={() => navigation.navigate("Scan")} className="mx-5 bg-primary shadow px-4 py-6 rounded-full flex-row items-center space-x-1">
        {/* <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">5</Text> */}
        {/* <QrcodeIcon color={theme.COLORS.white} size={25} /> */}
        <MaterialIcons name='credit-card-scan' color={theme.COLORS.white} size={25}  />
        <Text className="flex-1 text-white text-xs font-extrabold text-center">Verify Product</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ScanFab