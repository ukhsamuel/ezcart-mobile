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
  const messagesReducer = (messages = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_MESSAGES:
        return { ...messages, messages: payload };
      case GET_FEATURED_POSTS:
        return { ...messages, featuredposts: payload };
      case GET_ADS:
        return { ...messages, questions: payload };
      case GET_FEATURED_STORES:
        return { ...messages, stores: payload };
      case GET_FEATURED_PRODUCTS:
        return { ...messages, posts: payload };
      default:
        return messages;
    }
  };
  
  export default messagesReducer;
  