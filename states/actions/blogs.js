import {
    GET_CATEGORIES,
    GET_ADS,
    GET_FEATURED_STORES,
    GET_FEATURED_PRODUCTS,
    GET_BLOG_POST
  } from "../type";
  import { notify, loading } from "./response";
  
  import { ProductService } from "../../services";
  import { BlogsService } from "../../services";
  import { UserActions } from "../actions";
  
  export const getPosts = () => async (dispatch) => {
    dispatch(loading({ loading: true }));
    try {
      const res = await BlogsService.getPosts();
      dispatch(notify({ loading: false }));
    console.log('resbl',res)

      dispatch({
        type: GET_BLOG_POST,
        payload: res.data.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
        console.log('resbl err',err)

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
    
        dispatch({
          type: GET_CATEGORIES,
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
      dispatch(loading({ loading: true }));
      try {
        const res = await ProductService.getFeaturedStores();
        dispatch(notify({ loading: false }));
    
        dispatch({
          type: GET_FEATURED_STORES,
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
  
    export const getFeaturedProducts = () => async (dispatch) => {
      dispatch(loading({ loading: true }));
      try {
        const res = await ProductService.getFeaturedProducts();
        dispatch(notify({ loading: false }));
    
        dispatch({
          type: GET_FEATURED_PRODUCTS,
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
        
  const BlogActions = {
    getPosts,
      getFeaturedPosts,
      getAds,
      getFeaturedStores,
      getFeaturedProducts
  };
  
  export default BlogActions;
  