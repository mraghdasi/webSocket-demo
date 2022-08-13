import { instance } from 'api';
import { endpointUrls } from 'constant/endpoints';
import { userReducer } from 'redux/reducer/user/userReducer';

export const getUsersList = () => {
  return async (dispatch) => {
    instance
      .get(endpointUrls.userList)
      .then((res) => {
        dispatch(userReducer({ usersList: res.data.data }));
      })
      .catch((err) => {
        dispatch(userReducer({ usersList: [] }));
        console.log(err);
      });
  };
};
