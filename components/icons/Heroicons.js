import { View, Text } from 'react-native'
import React from 'react'

import { EyeIcon, EyeOffIcon } from "react-native-heroicons/solid";
import {  PhoneIcon, UserIcon ,ChevronDownIcon, MailIcon, LockClosedIcon} from "react-native-heroicons/solid";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

const returnIcon = (name, color, size) =>{
    if(name === 'PhoneIcon'){
        return <PhoneIcon size={size} color={color} />
    }else if(name === 'UserIcon'){
        return <UserIcon size={size} color={color} />
    }else if(name === 'MailIcon'){
        return <MaterialIcons
          name="email"
          color={color}
          size={size}
        />
    }else if(name === 'LockClosedIcon'){
        return <LockClosedIcon size={size} color={color} />
    }else if(name === 'EyeIcon'){
        return <EyeIcon size={size} color={color} />
    }else if(name === 'EyeOffIcon'){
        return <EyeOffIcon size={size} color={color} />
    }else if(name === 'ChevronDownIcon'){
        return <ChevronDownIcon size={16} color={color} />
    }
}

const Heroicons = ({iconName, color, size}) => {
  return (
    <View>
     {returnIcon(iconName, color, size)}
    </View>
  )
}

export default Heroicons