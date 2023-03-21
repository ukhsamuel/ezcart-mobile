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
import {
  StarIcon,
  MapPinIcon,
  EnvelopeIcon,
} from "react-native-heroicons/solid";
import {
  ArrowRightIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import {
  HomeRecommendedStoreCard,
  HomeStoreCard,
  ProductCard,
  SectionHeader,
} from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { ProductActions } from "../../../states/actions";
import { useEffect } from "react";

// create a component
const StoreFront = ({ route, navigation }) => {
  const store = route.params.store;
  const config = useSelector((state) => state.user.config);
  const dispatch = useDispatch();

  console.log('survey store', config.base_urls.banner_image_url + '/'+store.banner);


  useEffect(() => {
    // console.log('response???', response)

    dispatch(ProductActions.getSellerTopProducts(store.id)).then((data) => {
      console.log('p>', data)
  });

    // ProductActions.getSellerTopProducts(store.id).then((data) => {
    //   console.log('p>', data)
    // });
  }, []);


  const viewCategory = async () => {
    console.log(7786)
    navigation.push("StoreCategory");
  }
  return (
    <>
    <SafeAreaView className="bg-gray-50 flex-1">
      <ScrollView>
        <StoreCoverPhotoHeader image={{uri:config.base_urls.banner_image_url + '/'+store.banner}} />
        <View className="w-full flex-col px-4">
          <View className="h-20 py-4 border-b justify-center border-gray-200">
            <Text className="font-bold text-lg">{store.name}</Text>
          </View>
          <TouchableOpacity 
            onPress={() => {
              navigation.push("StoreReviews");
            }}
             className="flex-row h-16 py-2 border-b border-gray-200 ">
            <View className="basis-1/12 h-full justify-center">
              <StarIcon color={COLORS.primary} height={25} width={25} />
            </View>
            <View className="basis-1/12 h-full justify-center">
              <Text className="font-bold text-lg">{store.rating}</Text>
            </View>
            <View className="basis-9/12 h-full px-2 justify-center">
              <Text className="text-base text-gray-700">({store.rating} reviews)</Text>
            </View>
            <View className="basis-1/12 h-full justify-center">
              <ChevronRightIcon color={COLORS.black} height={25} width={25} />
            </View>
          </TouchableOpacity>
          <View className="flex-row h-16 py-2 border-b border-gray-200 ">
            <View className="basis-1/12 h-full justify-center">
              <StarIcon color={COLORS.primary} height={25} width={25} />
            </View>
            <View className="basis-3/12 h-full justify-center">
              <Text className="font-bold text-lg">2 Hours</Text>
            </View>
            <View className="basis-7/12 h-full justify-center">
              <Text className="text-base text-gray-700">Response Time</Text>
            </View>
          </View>
          <View className="flex-row h-16 py-2 border-b border-gray-200 ">
            <View className="basis-1/12 h-full justify-center">
              <MapPinIcon color={COLORS.primary} height={25} width={25} />
            </View>
            <View className="basis-11/12 h-full justify-center">
              <Text className="font-bold capitalize text-lg">{store.location}</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.push("StoreContact");
            }} className="flex-row h-16 py-2 border-b border-gray-200 ">
            <View className="basis-1/12 h-full justify-center">
              <EnvelopeIcon color={COLORS.primary} height={25} width={25} />
            </View>
            <View className="basis-10/12 h-full justify-center">
              <Text className="font-semibold text-lg">Contact Seller</Text>
            </View>
            <View className="basis-1/12 h-full justify-center">
              <ChevronRightIcon color={COLORS.black} height={25} width={25} />
            </View>
          </TouchableOpacity>

          <View className="">
            <SectionHeader
             title="Popular" showButton={false} />
          </View>
          <View className="flex-row w-full justify-between space-x-4 pb-4">
            <View className="flex-col w-44 bg-white items-center rounded-3xl relative p-4 h-68">
              <Image
                source={images.womanbaby}
                className="h-36 w-36 rounded-3xl"
              />
              <View className="text-left w-full">
                <Text
                  numberOfLines={2}
                  className="font-semibold mt-4 text-base"
                >
                  Pink Dohar
                </Text>
                <Text className="text-orange-400 text-sm font-bold justify-center">
                  N20,000
                </Text>
              </View>
              <View className="bg-orange-400 rounded-md absolute top-6 left-6 p-1 w-20 items-center justify-center">
                <Text className="text-white text-xs">Best Seller</Text>
              </View>
            </View>
            <View className="flex-col w-44 bg-white items-center rounded-3xl relative p-4 h-68">
              <Image
                source={images.womanbaby}
                className="h-36 w-36 rounded-3xl"
              />
              <View className="text-left w-full">
                <Text
                  numberOfLines={2}
                  className="font-semibold mt-4 text-base"
                >
                  Los Angeles Play Mat (Reversible)
                </Text>
                <Text className="text-orange-400 text-sm font-bold justify-center">
                  N20,000
                </Text>
              </View>
            </View>
          </View>

          {/* <View className="">
            <SectionHeader title="Playtime"  onPress={viewCategory
            } showButton={true} />
          </View>
          <View className="flex-col space-y-6">
              {store.products.map((option, index) => (
                <ProductCard product={option}  key={index} />
              ))}
          </View> */}
        </View>
      </ScrollView>
      <View className="bg-white h-24 px-4 align-middle justify-center py-2">
        <TouchableOpacity  onPress={() => {
              navigation.push("StoreCheckout");
            }} className="rounded-full  border-orange-400 border bg-orange-400 p-4  disabled:opacity-50">
          <Text className={`${theme.BUTTON.mainButtonText}`} 
           >
            Add to Basket - N165,000.00
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </>
  );
};

export default StoreFront;
