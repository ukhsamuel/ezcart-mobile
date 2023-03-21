import { SIGNUP,GET_CONFIG, SIGNIN, SIGNOUT, SET_MODE } from "../type";
import { User } from "../../models";

// const initialState = new User();
const initialState = {
  authToken: null,
  userData: {},
  config: {},
  userMode: 0,
  anyData: [],
  userInputting: false,
};

const userReducer = (user = initialState, action) => {
  const { type, payload } = action;
  // console.log('payload>', payload)
  switch (type) {
    case SIGNUP:
      return { ...user, ...payload };
    case SIGNIN:
      return {
        ...user,
        ...payload,
      };
    case GET_CONFIG:
      return {
        ...user,
        config: payload ,
      };
    case SET_MODE:
      return { ...user, userMode: payload };
    case SIGNOUT:
      return {
        authToken: null,
      };
    default:
      return user;
  }
};

export default userReducer;
