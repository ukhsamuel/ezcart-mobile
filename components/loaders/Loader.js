import React from "react";
import {
  useWindowDimensions,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import Spinner from 'react-native-loading-spinner-overlay';


const CustomLoaderComponent = () => {
  <View>
    <Text>Loading</Text>
  </View>;
};
const LoaderComponent = () => {
  const { width, height } = useWindowDimensions();
return (
  <View className="flex-1" style={[style.container, { height, width }]}>
    <View  style={style.loader}>
    <Spinner
          //visibility of Overlay Loading Spinner
          visible={true}
          overlayColor={'rgba(21, 56, 83, 0.45)'}
          //Text with the Spinner
          // textContent={"Loading..."}

          // customIndicator={CustomLoaderComponent}
          //Text style of the Spinner Text
          textStyle={style.spinnerTextStyle}
        />
      {/* <ActivityIndicator size="large" color="#153853" />
      <Text style={{ marginLeft: 10, fontSize: 16 }}>Loading...</Text> */}
    </View>
  </View>);
};
const NoLoaderComponent = () => {
  <View></View>;
};
const Loader = ({ visible = false, showLoader= false }) => {
  // console.log("visible", visible);
  // return <LoaderComponent />;
  return !!visible && !showLoader ? <LoaderComponent /> : <NoLoaderComponent />;
//   return <View className="flex-1 items-center absolute top-0 z-30 bg-red-500 h-96 w-full">
//     <Text>Trrrrr</Text>
//  <LoaderComponent /> 
//   </View>

  // <View style={[style.container, {height, width}]}>
  //     <View style={style.loader}>
  //       <ActivityIndicator size="large" color='#153853' />
  //       <Text style={{marginLeft: 10, fontSize: 16}}>Loading...</Text>
  //     </View>
  //   </View>
};

const style = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: "#fff",
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  container: {
    position: "absolute",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
  },
  spinnerTextStyle: {
    color: '#FFF',
  }
});

export default Loader;
