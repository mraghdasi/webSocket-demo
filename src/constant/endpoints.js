export const endpointUrls = {
  // user
  userList: '/users',
  userDetail: (id) => `/users/${id}`,

  // product
  productList: '/products',
  productDetail: (id) => `/products/${id}`,

  // price
  getPrice: (assets) => `wss://ws.coincap.io/prices?assets=${assets}`,
};
