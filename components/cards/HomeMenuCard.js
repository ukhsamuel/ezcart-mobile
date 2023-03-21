import { View, Text,
    Image, 
    TouchableOpacity} from 'react-native'
import React from 'react'
import { theme, images } from "../../constants";
import { useSelector, useDispatch } from "react-redux";

const HomeMenuCard = ({item}) => {
  const config = useSelector((state) => state.user.config);
  // console.log('user>', config.base_urls.category_image_url + '/' + item.icon)

  return (
    <TouchableOpacity className="items-center space-y-2 mb-4 w-20 h-28 overflow-hidden whitespace-nowrap">
      <Image
        source={
          config && config.base_urls && config.base_urls.category_image_url?
          {
          uri: config.base_urls.category_image_url + '/'+ item.icon,
        }:images.menuIcon3}
        className="h-14 w-14"
      />

      <Text numberOfLines={1} className="font-bold text-xs text-ellipsis overflow-hidden w-22 text-center whitespace-nowrap">{item.name}</Text>
    </TouchableOpacity>
  )
}

export default HomeMenuCard