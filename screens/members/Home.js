import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView as ScrollViewReact,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-virtualized-view";

import { SafeAreaView } from "react-native-safe-area-context";
import MembersHomeHeader from "../../components/headers/MembersHomeHeader";
import { theme, images } from "../../constants";
import { BUTTON } from "../../constants/theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { StarIcon, HeartIcon } from "react-native-heroicons/solid";
import {
  HomeStoreCard,
  HomeMenuCard,
  HomeRecommendedStoreCard,
  PostCard,
  SectionHeader,
  FilterOutlineButton,
} from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ProductActions } from "../../states/actions";

const menuItems = [
  {
    name: "Mum",
    img: images.menuIcon1,
  },

  {
    name: "Baby",
    img: images.menuIcon2,
  },

  {
    name: "Electronics",
    img: images.menuIcon3,
  },

  {
    name: "Homeware",
    img: images.menuIcon4,
  },

  {
    name: "Health",
    img: images.menuIcon5,
  },

  {
    name: "Beauty",
    img: images.menuIcon6,
  },
  {
    name: "Fashion",
    img: images.menuIcon11,
  },
  {
    name: "More",
    img: images.menuIcon13,
  },
];


const featuredProducts = [
  {
    name: "‘Chocolate Monster Milkshake’ Teether Set",
    img: images.choc,
    amount: "15,000.00",
    date: "April 29, 2022",
    location:'lagos',
    rating: '4.8',
    count: '3.4k',
  },

  {
    name: "All Cuddled Up – Teal",
    img: images.teal,
    amount: "35,000.00",
    date: "April 29, 2022",
    location:'lagos',
    rating: '4.8',
    count: '3.4k',
  },

  {
    name: "Ice Cream Cone – Only Brown Pillow Currently In Stock",
    img: images.icecream,
    amount: "12,000.00",
    date: "April 29, 2022",
    location:'lagos',
    rating: '4.8',
    count: '3.4k',
  },

  {
    name: "Bamboo Suction Baby Bowl and Spoon – Dusty Pink",
    img: images.bamboo,
    amount: "23,200.00",
    date: "April 29, 2022",
    location:'lagos',
    rating: '4.8',
    count: '3.4k',
  },

  {
    name: "Bamboo Elephant Suction Plate and Fort Set Dusty Pink",
    img: images.elephant,
    amount: "25,600.00",
    date: "April 29, 2022",
    location:'lagos',
    rating: '4.8',
    count: '3.4k',
  },
];


const featuredStores = [
  {
    name: "Zen Yoga Studio",
    img: images.yogalogo,
    location:'lagos',
    rating: '4.8',
    count: '2.8k',
    products: featuredProducts
  },

  {
    name: "The Cuddle Club",
    img: images.cuddleclub,
    location:'lagos',
    rating: '4.8',
    count: '1.2k',
    products: featuredProducts
  },

  {
    name: "Dennis Yoga",
    img: images.yogalogo,
    location:'lagos',
    rating: '4.8',
    count: '2k',
    products: featuredProducts
  },

  {
    name: "Henry Plants",
    img: images.cuddleclub,
    location:'lagos',
    rating: '4.8',
    count: '1.8k',
    products: featuredProducts
  },

  {
    name: "Art Classes for Kids",
    img: images.cuddleclub,
    location:'lagos',
    rating: '4.8',
    count: '3.4k',
    products: featuredProducts
  },
];
const post = {
  img: images.yogalogo,
  title: "Free Mommy and Maternal offering free baby yoga",
  description:"We are offering free baby yoga classes tuesday from 8AM - 9AM."
}

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.AuthReducers);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const products = useSelector((state) => state.product?.products?.products);
  const stores = useSelector((state) => state.product.stores);

  console.log('stores---',stores)

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // console.log("Screen is focused");
      dispatch(ProductActions.getCategories());
      dispatch(ProductActions.getFeaturedPosts());
      dispatch(ProductActions.getAds());
      dispatch(ProductActions.getFeaturedStores());
      dispatch(ProductActions.getFeaturedProducts());
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <>
      <SafeAreaView
        style={styles.container}
        className="bg-white flex-1 pb-0 mb-0 relative"
      >
        <MembersHomeHeader
          title={`Deliver to`}
          showPhoto={true}
          showBackButton={false}
          location={"Central, Ikoyi"}
        />

        <ScrollView
          nestedScrollEnabled={true}
          scrollEventThrottle={400}
          className="flex-1"
        >
          <View>
            <View className="flex-row px-4 items-center space-x-2 pb-2 mt-4">
              <View className="flex-row flex-1 space-x-2 rounded-2xl bg-gray-100 p-3 py-4">
                <MagnifyingGlassIcon color="gray" />
                <TextInput
                  placeholder="Looking for something amazing?"
                  keyboardType="default"
                />
              </View>
            </View>

            <ScrollViewReact
              horizontal
              contentContainerStyle={{
                paddingHorizontal: 15,
                paddingVertical: 15
              }}
              showsHorizontalScrollIndicator={false}
              className="mdy-4"
            >
              {/* {posts && posts.slice(0, 4).map((option, index) => (
                <PostCard key={index} post={option} />
              ))} */}
              {/* <HomeStoreCard />
              <HomeStoreCard /> */}
            </ScrollViewReact>

            {/* <View className="px-4">
              <PostCard post={post} />
            </View> */}

            <View className=" px-4">
              <SectionHeader title="Categories" />
              <FlatList
                columnWrapperStyle={{ justifyContent: "space-between" }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  marginTop: 10,
                  paddingBottom: 50,
                }}
                numColumns={4}
                data={categories.slice(0, 7)}
                renderItem={({ item,index }) => {
                  if(index <6){return <HomeMenuCard item={item} />}
                  return  <HomeMenuCard item={{name:'More'}} />
                }}
              />
            </View>
            <View className="px-4">
              <SectionHeader title="Stores" />
            </View>
            <ScrollViewReact
              horizontal
              contentContainerStyle={{
                paddingHorizontal: 15,
                paddingVertical: 15
              }}
              showsHorizontalScrollIndicator={false}
              className="mdy-4"
            >
              {stores && stores.map((option, index) => (
                <HomeStoreCard  store={option} key={index} />
              ))}
              {/* <HomeStoreCard />
              <HomeStoreCard /> */}
            </ScrollViewReact>

            <View className="px-4">
              <SectionHeader title="Recommended For You" showButton={true} />
            </View>
            <ScrollViewReact
              horizontal
              contentContainerStyle={{}}
              showsHorizontalScrollIndicator={false}
              className="py-2"
            >
              <FilterOutlineButton selected={true} text="All" />
              {categories && categories.map((option, index) => (
                <FilterOutlineButton text={option.name}  key={index} />
              ))}

              {/* <FilterOutlineButton selected={true} text="All" />
              <FilterOutlineButton text="Mum" />
              <FilterOutlineButton text="Baby" />
              <FilterOutlineButton text="Eletronics" />
              <FilterOutlineButton text="Health Care" /> */}
            </ScrollViewReact>
            <View className="px-4">
              {products && products.map((option, index) => (
                <HomeRecommendedStoreCard product={option}  key={index} />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  featuredImg: {
    shadowColor: "#96e7f7",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
});

export default Home;
