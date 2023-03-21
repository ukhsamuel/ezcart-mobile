//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { CommentCard, SocialFeedCard, UserStory } from "../../../components";
import { images } from "../../../constants";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { BlogActions } from "../../../states/actions";
// import InstaStory from "react-native-insta-story";

const storiesBar = () => {
  return (
    <View className=" py-4 pt-6  h-auto bg-white shadow-sm shadow-cyan-50">
      {/* <InstaStory
          data={createData()}
          unPressedBorderColor={'#F4900C'}
          duration={10}
          customSwipeUpComponent={
            <View>
              <Text>Swipe</Text>
            </View>
          }
        /> */}
    </View>
  );
};

const data = [
  {
    user_id: 1,
    user_image:
      "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
    user_name: "Ahmet Çağlar Durmuş",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    user_name: "Test User",
    stories: [
      {
        story_id: 1,
        story_image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 1 swiped"),
      },
      {
        story_id: 2,
        story_image:
          "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log("story 2 swiped"),
      },
    ],
  },
];
function createData() {
  const array = [];

  const userCount = 10;
  const userStoryCount = 15;

  for (let i = 1; i <= userCount; i++) {
    const storyArray = [];
    for (let k = 1; k <= userStoryCount; k++) {
      storyArray.push({
        story_id: i,
        story_image: "https://picsum.photos/500/800?random=" + Math.random(),
        swipeText: "Custom swipe text for this story",
        onPress: () => console.log(`story ${i} swiped`),
      });
    }

    array.push({
      user_id: i,
      user_image: "https://picsum.photos/200/300?random=" + Math.random(),
      user_name: "Little Picassos",
      stories: storyArray,
    });
  }
  return array;
}

//   const EzFeed = () => {
//     return (
//         <InstaStory
//         data={createData()}
//         duration={10}
//         customSwipeUpComponent={
//           <View>
//             <Text>Swipe</Text>
//           </View>
//         }
//         style={{ marginTop: 30 }}
//       />
//   );
//   };

// create a component
const EzFeed = ({navigation}) => {
  const user = useSelector((state) => state.AuthReducers);
  // const categories = useSelector((state) => state.product.categories);

  const dispatch = useDispatch();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(BlogActions.getPosts());
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView
        nestedScrollEnabled={true}
        scrollEventThrottle={400}
        className="flex-1"
      >
        {storiesBar()}
        <View className="px-4">
          <SocialFeedCard />
          <SocialFeedCard />
          <SocialFeedCard />
          <SocialFeedCard />
          <SocialFeedCard />
          <SocialFeedCard />
          <SocialFeedCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

//make this component available to the app
export default EzFeed;
