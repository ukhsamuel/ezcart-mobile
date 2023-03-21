import http from "../http";

export const getCategories = async () => {
  return http().get("/categories");
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

export const getSellerTopProducts = async (id) => {
  let body = {
    "offset": "dolor",
    "limit": "suscipit"
};

  return http().get(`/seller/${id}/products`, {
    params: {
      body: body
    }
  }
  );
};

const ProductService = {
  getCategories,
  getFeaturedPosts,
  getAds,
  getFeaturedStores,
  getFeaturedProducts,
  getSellerTopProducts
};

export default ProductService;
