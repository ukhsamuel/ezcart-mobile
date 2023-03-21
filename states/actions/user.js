import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  SIGNUP,
  SIGNIN,
  UPLOAD_PHOTO,
  PROCESS_OCR,
  SET_MODE,
  GET_CONFIG,
  SIGNOUT
} from "../type";
import { UserService } from "../../services";
// import { notify, loading } from './response';
import { loading,notify } from "./response";


export const Init =  () => {
  return async dispatch => {
      let user =  await AsyncStorage.getItem('ezCartUser');
      console.log('user>',JSON.parse(user))
      if(user !== null){
          dispatch({
              type: 'SIGNIN',
              payload:  JSON.parse(user)
          })

      }}

}

export const signIn = (data) => async (dispatch) => {
  console.log(889)
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.signIn(data);

    // dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));
    await AsyncStorage.setItem(
      "ezCartToken",
      JSON.stringify(res.data.token)
    );
    res.data.user.token = res.data.token;

    await AsyncStorage.setItem(
      "ezCartUser",
      JSON.stringify(res.data.user)
    );
    console.log('res>', res)

    dispatch({
      type: SIGNIN,
      payload: { ...res.data.user, isAuthorized: true },
    });
    return Promise.resolve(res.data.user);
  } catch (err) {
    console.log('err>', err)

    dispatch(notify({ title: err.name, message: err.response?.data?.message || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};

export const signUp = (data) => async (dispatch) => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.signUp(data);
    console.log(res.data)
    dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));
    await AsyncStorage.setItem(
      "ezCartToken",
      JSON.stringify(res.data.token)
    );
    res.data.user.token = res.data.token;

    await AsyncStorage.setItem(
      "ezCartUser",
      JSON.stringify(res.data.user)
    );

    // dispatch({
    //   type: SIGNUP,
    //   payload: data,
    // });


    dispatch({
      type: SIGNUP,
      payload: { ...res.data.user, isAuthorized: true },
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log('err>', err.response?.data?.message)
    dispatch(notify({ title: err.response?.data?.message || "Error", message: err.response?.data?.message || err.message, type: 'danger', loading: false }));
    return Promise.reject(err);
  }
};
export const uploadPhoto = (photo) => async (dispatch) => {
  dispatch(loading({ loading: true }));
  try {
    console.log(photo)

    const res = await UserService.uploadPhoto(photo);
    // console.log('res', res.data.data)
    // dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch(notify({ loading: false }));

    dispatch({
      type: UPLOAD_PHOTO,
      payload: res.data.data,
    });

    return Promise.resolve(res.data.data);
  } catch (err) {
    console.log('err', err)

    if (err.response && err.response.status === 401) {
      dispatch(UserActions.signOut());
    }
    // dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    dispatch(notify({ loading: false }));
    return Promise.reject(err);
  }
};

export const ocrProcessing = (photo) => async (dispatch) => {
  dispatch(loading({ loading: true }));
  try {
    console.log(photo)

    const res = await UserService.ocrProcessing(photo);
    console.log(JSON.stringify(res.data.data))
    // dispatch(notify({ title: res.data.status, message: res.data.message, type: 'success', loading: false }));

    dispatch(notify({ loading: false }));

    dispatch({
      type: PROCESS_OCR,
      payload: res.data.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    if (err.response && err.response.status === 401) {
      dispatch(UserActions.signOut());
    }
    // dispatch(notify({ title: err.name, message: err.response?.data?.error || err.message, type: 'danger', loading: false }));
    dispatch(notify({ loading: false }));
    return Promise.reject(err);
  }
};

export const setMode = (mode) => async (dispatch) => {
  // console.log(44242)
  dispatch({
    type: SET_MODE,
    payload: mode,
  });

  return Promise.resolve(mode);
};

export const getConfig = () => async (dispatch) => {
  dispatch(loading({ loading: true }));
  try {
    const res = await UserService.getConfig();
    dispatch(notify({ loading: false }));
    console.log('config>>', res)
    dispatch({
      type: GET_CONFIG,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    if (err.response && err.response.status === 401) {
      dispatch(UserActions.signOut());
    }
    dispatch(
      notify({
        title: err.name,
        message: err.response?.data?.message || err.message,
        type: "danger",
        loading: false,
      })
    );
    return Promise.reject(err);
  }
};

export const signOut = () => async (dispatch) => {
  console.log('SIGNOUT')
  await AsyncStorage.clear();
  dispatch({
    type: SIGNOUT,
    payload: { isAuthorized: false },
  });
};

const UserActions = {
  signIn,
  signOut,
};

export default UserActions;
