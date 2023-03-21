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
const ordersReducer = (products = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES:
      return { ...products, categories: payload };
    case GET_FEATURED_POSTS:
      return { ...products, featuredposts: payload };
    case GET_ADS:
      return { ...products, questions: payload };
    case GET_FEATURED_STORES:
      return { ...products, stores: payload };
    case GET_FEATURED_PRODUCTS:
      return { ...products, posts: payload };
    default:
      return products;
  }
};

export default ordersReducer;
