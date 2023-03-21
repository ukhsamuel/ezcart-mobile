import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import TabsScreen from "./navigation/MainStack";
import AuthScreen from "./navigation/AuthStack";
import TabsScreen from "./navigation/MainStack";
import {
  Home,
  Credits,
  Message,
  Orders,
  Profile,
  StoreFront,
  EzFeed,
  PinPage,
} from "./screens/members";
import {
  StoreRatingsReviews,
  StoreCategory,
  StoreReviews,
  StoreContact,
  StoreItem,
  StoreCheckout,
  StoreCheckoutOptions,
  StoreDelivery,
  TrackOrder,
  CancelOrder,
} from "./screens/members/Store";
import ChatPage from "./screens/members/ChatPage";
import EzCredits from "./screens/members/Wallet/EzCredits";
import Refund from "./screens/members/Wallet/Refund";
import TopUpMethods from "./screens/members/Wallet/TopUpMethods";
import BankDetails from "./screens/members/Wallet/BankDetails";
import FavoriteStores from "./screens/members/Profile/FavoriteStores";
import OrderDetails from "./screens/vendor/OrderDetails";
import { store } from "./states/store";
import { useDispatch } from "react-redux";
import { Provider, useSelector } from "react-redux";
import { Init, getConfig } from "./states/actions/user";
import { useEffect, useState } from "react";
import Toast from "react-native-toast-notifications";
import { Loader } from "./components";
import { UtilityService } from "./services";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const token = useSelector((state) => state.user.token);
  const mode = useSelector((state) => state.user.userMode);
  const response = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  console.log("token>>", response);
  const dispatch = useDispatch();
  const init = () => {
    dispatch(Init());
    // }
  };

  useEffect(() => {
    // console.log('response???', response)
    setLoading(response?.loading?.loading);
    setShowLoader(response?.loading?.showLoader);
  }, [response]);

  const showNotification = (response, message, title) => {
    UtilityService.showToast(response, message, title);
  };

  useEffect(() => {
    // console.log("response.message>", response);
    if (response.type) {
      let msg = "";
      if (
        response.response &&
        response.response.data &&
        response.response.data.message &&
        typeof response.response.data.message === "string"
      ) {
        msg = response.response.data.message;
      } else if (typeof response.message === "string") {
        msg = response.message;
      } else {
        response.message.forEach((msg) => {
          Object.keys(msg).forEach((key) => {
            let str = `${key} Error`;
            let title = str.charAt(0).toUpperCase() + str.slice(1);
            let message = msg[key];
            showNotification(response, message, title);
          });
        });
        return;
      }
      showNotification(response, msg);
    } // eslint-disable-next-line
  }, [response]);

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    dispatch(getConfig());
  }, [token]);

  return (
    <>
          {/* <Text className="flex-1 items-center flex text-center bg-slate-500 h-4">{loading?'lT':'lF'} | {showLoader?'sL':'sF'}</Text> */}

      <Loader visible={true} showLoader={true} />

      <Toast ref={(ref) => (global["toast"] = ref)} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="Auth" component={AuthScreen} /> */}

          {/* {token === null || !token ? ( */}
          {0 ? (
            <Stack.Screen name="Auth" component={AuthScreen} />
          ) : (
            <>
              <Stack.Screen name="Tabs" component={TabsScreen} />
              <Stack.Screen name="StoreFront" component={StoreFront} />
              <Stack.Screen name="StoreReviews" component={StoreReviews} />
              <Stack.Screen name="StoreContact" component={StoreContact} />
              <Stack.Screen name="StoreCategory" component={StoreCategory} />
              <Stack.Screen name="StoreItem" component={StoreItem} />
              <Stack.Screen name="StoreCheckout" component={StoreCheckout} />
              <Stack.Screen
                name="StoreCheckoutOptions"
                component={StoreCheckoutOptions}
              />
              <Stack.Screen name="StoreDelivery" component={StoreDelivery} />
              <Stack.Screen name="ChatPage" component={ChatPage} />
              <Stack.Screen name="TrackOrder" component={TrackOrder} />
              <Stack.Screen name="CancelOrder" component={CancelOrder} />
              <Stack.Screen name="OrderDetails" component={OrderDetails} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
