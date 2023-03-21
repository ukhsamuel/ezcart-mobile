import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
const { width } = Dimensions.get("window");
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLORS, theme } from "../../constants";

const SelectDropdownInput = ({
  items,
  name,
  arrKey,
  defaultValue,
  label,
  placeholder,
  showSearch=false,
  error,
  onFocus = () => {},
  onChangeText = () => {},
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  // console.log("inputs banks items", items);

  return (
    <View className="flex-col space-x-2 pb-2 mb-4 mx-4">
      <View className="">
        <Text className={`${theme.LABEL.label1}`}>{label}</Text>
        <View>
          <SelectDropdown
            data={items}
            defaultValue={defaultValue}
            defaultButtonText={placeholder}
            buttonStyle={styles.dropdown1BtnStyle}
            dropdownStyle={styles.dropdown1DropdownStyle}
            // buttonTextStyle={styles.dropdown1BtnTxtStyle}
            // renderDropdownIcon={(isOpened) => {
            //   return (
            //     <FontAwesome
            //       name={isOpened ? "chevron-up" : "chevron-down"}
            //       color={"#153853"}
            //       size={18}
            //     />
            //   );
            // }}
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View className="flex-row items-center align-middle relative ">
                  {/* {selectedItem && (
                    <Text className="font-bold text-md w-11/12">
                      {selectedItem.name}
                    </Text>
                  ) } */}
                  <Text className={`font-bold ${selectedItem?'text-primary':'text-gray-400'}  text-md w-11/12`}>
                    {selectedItem ? (arrKey?selectedItem.name:selectedItem) : placeholder}
                  </Text>
                  <FontAwesome name="chevron-down" color={COLORS.primary} size={16} />
                </View>
              );
            }}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View className="bg-white flex-1 py-2 px-2 border-0">
                  <Text className="text-primary font-bold">{arrKey?item.name:item}</Text>
                </View>
              );
            }}
            rowStyle={styles.dropdown1RowStyle}

            search
            searchInputStyle={styles.dropdown3searchInputStyleStyle}
            searchPlaceHolder={'Search here'}
            searchPlaceHolderColor={COLORS.primary}
            renderSearchInputLeftIcon={() => {
              return <FontAwesome name={'search'} color={COLORS.primary} size={18} />;
            }}
            // rowTextStyle={styles.dropdown1RowTxtStyle}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem[arrKey], arrKey);
              // console.log(selectedItem[arrKey], index);
              if(arrKey)
                onChangeText(selectedItem[arrKey], name);
              else
                onChangeText(selectedItem, name);

              onFocus();
              setIsFocused(true);
            }}
            // buttonTextAfterSelection={(selectedItem, index) => {
            //   // text represented after item is selected
            //   // if data array is an array of objects then return selectedItem.property to render after item is selected
            //   return selectedItem;
            // }}
            // rowTextForSelection={(item, index) => {
            //   // text represented for each item in dropdown
            //   // if data array is an array of objects then return item.property to represent item in dropdown
            //   return item;
            // }}
          />
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

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    width,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, width, backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
    paddingBottom: "20%",
  },

  dropdown1BtnStyle: {
    width: "100%",
    height: 40,
    backgroundColor: "#f3f4f6",
    borderRadius: 3,
    color: "#153853",
    borderBottomColor: "red",
  },
  dropdown1BtnTxtStyle: {
    color: "#153853",
    fontSize: 14,
    marginLeft: 1,
    // paddingLeft:0,
    fontWeight: "600",
    textAlign: "left",
    backgroundColor: "#f3f4f6",
  },
  dropdown1DropdownStyle: {
    backgroundColor: "#ffffff",
    borderRadius:8
  },
  dropdown1RowStyle: {
    borderBottomColor: "#f7f7f7",
    borderBottomWidth: 0
  },
  dropdown1RowTxtStyle: { color: "#153853", textAlign: "left" },

 
  dropdown3BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#444',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor: 'slategray',
    borderBottomColor: '#444',
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3searchInputStyleStyle: {
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#f7f7f7',
    color:COLORS.primary
  },
});

export default SelectDropdownInput;
