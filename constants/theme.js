import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  primary: "#FF981F",
  transparentPrimary: "#153853",
  orange: "#153853",
  heartRed: "#FF4D67",
  lightOrange: "#153853",
  lightOrange2: "#153853",
  lightOrange3: "#153853",
  green: "#27AE60",
  themeGreen: "#00f387",
  red: "#FF1717",
  blue: "#0064C0",
  skyBlue: '#DAEFFF',
  dark: "#242424",
  darkBlue: "#111A2C",
  darkGray: "#525C67",
  darkGray2: "#757D85",
  gray100: "#f3f4f6",
  gray: "#898B9A",
  gray2: "#BBBDC1",
  gray3: "#9E9E9E",
  gray4: "#CACACA",
  lightGray1: "#DDDDDD",
  lightGray2: "#F5F5F8",
  white2: "#FBFBFB",
  white: "#FFFFFF",
  black: "#000000",
  success: "#00C851",

  transparent: "transparent",
  transparentBlack1: "rgba(0, 0, 0, 0.1)",
  transparentBlack7: "rgba(0, 0, 0, 0.7)",
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 10,
  tabIcon: 26,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: { fontFamily: "Poppins-Black", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "Poppins-Bold", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Poppins-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "Poppins-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
  body1: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Poppins-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontWeight: '500',
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

export const INPUT = {
  textbox: "font-bold tracking-wider text-primary bg-gray-100 rounded p-3",
  iconTextbox: " bg-gray-100 rounded p-3 flex flex-row align-middle",
  iconTextInput: "font-bold tracking-wider text-primary",
};

export const LABEL = {
  label1: "font-extrabold pb-2 text-md text-dark",
  labelUnderline: "text-primary underline",
  pageIntro: "mb-1 text-xl font-bold",
  pageDesc: "text-gray-500",
};

export const BUTTON = {
    main: "rounded-lg bg-primary p-4  disabled:opacity-50",
    outline: "rounded-3xl border  border-slate-300 bg-white p-4 disabled:opacity-50",
    mainButtonText: "text-center text-base font-semibold text-white  disabled:opacity-50",
    altButtonText: "text-center text-sm font-bold text-dark  disabled:opacity-50",
    outlineButtonText: "text-center text-sm font-semibold text-dark  disabled:opacity-50",
};

const appTheme = { COLORS, SIZES, FONTS, INPUT, LABEL, BUTTON };

export default appTheme;
