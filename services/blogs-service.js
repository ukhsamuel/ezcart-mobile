import http from "../http";

export const getPosts = async () => {
  return http().get("/posts");
};

export const getFeaturedPosts = async () => {
  return http().pgetatch("/auth/verify-account");
};

export const getAds = async (data) => {
  return http().get(`/banners/10`);
};

export const getFeaturedStores = async (data) => {
  return http().get(`/seller/top`);
};

export const getFeaturedProducts = async (data) => {
  return http().get(`/products/featured`);
};

const BlogsService = {
  getPosts,
  getFeaturedPosts,
  getAds,
  getFeaturedStores,
  getFeaturedProducts,
};

export default BlogsService;
