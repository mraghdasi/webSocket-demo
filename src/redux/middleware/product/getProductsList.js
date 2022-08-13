import { instance } from 'api';
import { endpointUrls } from 'constant/endpoints';
import { productReducer } from 'redux/reducer/product/productReducer';

export const getProductsList = () => {
  return async (dispatch) => {
    instance
      .get(endpointUrls.productList)
      .then(({ data }) => {
        console.log(data);
        dispatch(productReducer({ productsList: data.data }));
      })
      .catch((err) => {
        dispatch(productReducer({ productsList: [] }));
        console.log(err);
      });
  };
};
