import http from "../http";

export const getMessages = async () => {
  return http().get("/customer/chat/list/seller");
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

const MessagesService = {
  getCategories,
  getFeaturedPosts,
  getAds,
  getFeaturedStores,
  getFeaturedProducts,
};

export default MessagesService;
