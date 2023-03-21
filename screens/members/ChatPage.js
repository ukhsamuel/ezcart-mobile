import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Keyboard,
  Image,
  Platform,
} from "react-native";
import React, { useLayoutEffect, useRef, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import { MembersHeader } from "../../components";
import { theme, images, COLORS } from "../../constants";
import Modal from "react-native-modal";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { ProductActions } from "../../states/actions";

// create a component
const ChatPage = ({ navigation, route }) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const user = useSelector((state) => state.AuthReducers);

  const dispatch = useDispatch();


  const closeAlert = () => {
    // sign up the user and close the modal
    setIsModalVisible(() => !isModalVisible);
  };

  const showalert = () => {
    return (
      <View>
        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setIsModalVisible(false)}
        >
          <View className="absolute h-52 justify-center bottom-24 w-full rounded-3xl bg-white">
            <View className="bg-white justify-between flex-row space-x-4 p-4 px-10 rounded-3xl">
              <View className="flex-col space-y-2 items-center">
                <Image
                  source={images.document}
                  className="h-16 w-16 rounded-3xl mb-2"
                />
                <Text className="font-semibold text-base">Document</Text>
              </View>
              <View className="flex-col space-y-2 items-center">
                <Image
                  source={images.camera}
                  className="h-16 w-16 rounded-3xl mb-2"
                />
                <Text className="font-semibold text-base">Camera</Text>
              </View>
              <View className="flex-col space-y-2 items-center">
                <Image
                  source={images.gallery}
                  className="h-16 w-16 rounded-3xl mb-2"
                />
                <Text className="font-semibold text-base">Gallery</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  const [input, setInput] = useState("");
  // const [messages, setMessages] = useState([]);
  const messages = [
    {
      id: 1,
      email: "111",
      message: "Order sent",
      time: "16:01",
    },
    {
      id: 2,
      email: "222",
      message: "Great! I will arrive soon...",
      time: "16:01",
    },
    {
      id: 22422,
      email: "222",
      message:
        "I've packed your order. I will arrive at your place in 5 minutes 😁",
      time: "16:01",
    },
    {
      id: 3,
      email: "111",
      message: "Wow, that's really fast",
      time: "16:01",
    },
    {
      id: 24424,
      email: "222",
      message: "Glad you like our service",
      time: "16:01",
    },
    {
      id: 24414,
      email: "222",
      message: "please let me know if there is any issue with your order",
      time: "16:01",
    },
    {
      id: 2442,
      email: "111",
      message: "Yes I will",
      time: "16:01",
    },
    {
      id: 547,
      email: "111",
      message: "I loved the product",
      time: "16:01",
    },
    {
      id: 897,
      email: "222",
      message: "you are welcome",
      time: "16:01",
    },
  ];
  const scrollViewRef = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerBackTitleVisible: false,
      headerTitleStyle: {
        alignSelf: "flex-start",
      },
      headerTitle: () => (
        <View className={`flex flex-row items-center`}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu51XqkERN4KCU2HF526phPswwmMY9qjexFA&usqp.jpg",
            }}
          />
          <Text className={`text-white ml-2 font-bold`}>Chat Page</Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons name="call" size={24} color="white" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View className={`flex-row items-center`}>
          <TouchableOpacity className={`mr-4`}>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="call" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation, messages]);
  const sendMessage = async () => {
    Keyboard.dismiss();
  };
  return (
    <SafeAreaView className={`flex-1 bg-white px-2`}>
      {/* <StatusBar style="light" /> */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={90}
        className={`flex-1`}
      >
        <>
          <MembersHeader title="The Cuddle Club" showBackButton={true} />
          {showalert()}

          <ScrollView
          className=" px-4"
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
          >
            {messages.map((message) =>
              message?.email === "111" ? (
                <View
                  key={message.id}
                  className={`py-3 px-4 bg-[#FF981F]  flex-row  self-end rounded-2xl rounded-br-md m-2 mb-3 min-w-[40%] max-w-[70%] relative`}
                >
                  <Text className={`text-white text-left font-500 ml-4 mb-3`}>
                    {message?.message}
                  </Text>
                  <Text
                    className={`text-gray-200 text-sm absolute bottom-1 right-4
                                `}
                  >
                    {message.time}
                  </Text>
                </View>
              ) : (
                <View
                  className={`py-3 px-4 bg-[#F5F5F5] flex-row rounded-2xl rounded-tl-md min-w-[40%] m-2 mb-3 max-w-[70%] relative`}
                  key={message.id}
                >
                  <Text className={`text-dark text-lg font-base w-48 mb-3`}>
                    {message.message}
                  </Text>
                  <Text
                    className={`text-gray-500 text-sm absolute bottom-1 right-4
                                `}
                  >
                    {message.time}
                  </Text>
                </View>
              )
            )}
          </ScrollView>
          <View className="px-4">
            <View
              className={`flex-row rounded-3xl space-x-2 items-center bg-gray-50  w-[100%] px-4 py-2 `}
            >
              <TouchableOpacity onPress={sendMessage}>
                <Ionicons name="happy-outline" size={22} color={COLORS.gray} />
              </TouchableOpacity>
              <TextInput
                placeholder="type message"
                className={`bottom-0 h-f16 text-gray-700 text-lg flex-1 mr-2 border-transparent border p-1 rounded-xl`}
                textAlignVertical="top"
                onSubmitEditing={sendMessage}
                numberOfLines={3}
                value={input}
                onChangeText={(text) => setInput(text)}
              />
              <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <Ionicons name="attach" size={22} color={COLORS.gray} />
              </TouchableOpacity>
              <TouchableOpacity onPress={sendMessage}>
                <Ionicons name="camera" size={22} color={COLORS.gray} />
              </TouchableOpacity>
            </View>
          </View>
        </>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const style = {
  container: {
    flex: 1,
  },
  headerRightContainer: {
    flexDirection: "row",
  },
  headerRightButton: {
    marginRight: 10,
  },
  errorContainer: {
    backgroundColor: "#333",
    opacity: 0.8,
    padding: 10,
  },
  error: {
    color: "#fff",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  empty: {
    fontSize: 24,
    color: "#999",
    alignSelf: "center",
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: "#555",
  },
  uploadButton: {
    marginRight: 10,
  },
  sendButton: {
    marginLeft: 10,
  },
};

//make this component available to the app
export default ChatPage;
