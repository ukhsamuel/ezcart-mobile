import {
    NOTIFY,
    LOADING,
    GET_CATEGORIES,
    GET_FEATURED_POSTS,
    GET_FEATURED_STORES,
    GET_FEATURED_PRODUCTS,
    GET_ADS
  } from "../type";
  
  const initialState = {
    categories: [],
    featuredposts: [],
    stores: [],
    posts: [],
  };
  const blogsReducer = (blogs = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_CATEGORIES:
        return { ...blogs, categories: payload };
      case GET_FEATURED_POSTS:
        return { ...blogs, featuredposts: payload };
      case GET_ADS:
        return { ...blogs, questions: payload };
      case GET_FEATURED_STORES:
        return { ...blogs, stores: payload };
      case GET_FEATURED_PRODUCTS:
        return { ...blogs, posts: payload };
      default:
        return blogs;
    }
  };
  
  export default blogsReducer;
  