import {
  GET_CATEGORIES,
  GET_ADS,
  GET_FEATURED_STORES,
  GET_FEATURED_PRODUCTS,
} from "../type";
import { notify, loading } from "./response";

import { ProductService } from "../../services";
import { UserActions } from "../actions";

export const getCategories = () => async (dispatch) => {
  dispatch(loading({ loading: true }));
  try {
    const res = await ProductService.getCategories();
    dispatch(notify({ loading: false }));
    console.log('cat> ',res.data)
    dispatch({
      type: GET_CATEGORIES,
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


export const getFeaturedPosts = () => async (dispatch) => {
    dispatch(loading({ loading: true }));
    try {
      const res = await ProductService.getFeaturedPosts();
      dispatch(notify({ loading: false }));
      console.log('getFeaturedPosts>',res)

      dispatch({
        type: GET_CATEGORIES,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
        console.log('getFeaturedPosts> err',err)

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


  export const getAds = () => async (dispatch) => {
    dispatch(loading({ loading: true }));
    try {
      const res = await ProductService.getAds();
      dispatch(notify({ loading: false }));
  
      dispatch({
        type: GET_ADS,
        payload: res.data.data,
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


  export const getFeaturedStores = () => async (dispatch) => {
    // console.log(343434343)
    dispatch(loading({ loading: true }));
    try {
      const res = await ProductService.getFeaturedStores();
      dispatch(notify({ loading: false }));
        
    //   console.log('getFeaturedStores>',res)
      dispatch({
        type: GET_FEATURED_STORES,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
        console.log('getFeaturedStores err>',err)

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

  export const getFeaturedProducts = () => async (dispatch) => {
    dispatch(loading({ loading: true }));
    try {
      const res = await ProductService.getFeaturedProducts();
      dispatch(notify({ loading: false }));
    //   console.log('getFeaturedProducts>',res)

      dispatch({
        type: GET_FEATURED_PRODUCTS,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
        console.log('getFeaturedProducts err>',err)

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
  export const getSellerTopProducts = (id) => async (dispatch) => {
    dispatch(loading({ loading: true }));
    try {
      const res = await ProductService.getSellerTopProducts(id);
      dispatch(notify({ loading: false }));
    //   console.log('getFeaturedProducts>',res) 
      return Promise.resolve(res.data);
    } catch (err) {
        console.log('getFeaturedProducts err>',err)

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
      
const ProductActions = {
    getCategories,
    getFeaturedPosts,
    getAds,
    getFeaturedStores,
    getFeaturedProducts,
    getSellerTopProducts
};

export default ProductActions;
