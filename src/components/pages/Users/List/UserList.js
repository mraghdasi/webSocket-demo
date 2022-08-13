import { instance } from 'api';
import { endpointUrls } from 'constant/endpoints';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersList } from 'redux/middleware/user/getUsersList';
import styled from 'styled-components';
import UserCard from '../components/UserCard';
import UserDetailModal from './../components/UserDetailModal';

const ScGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 16px;
`;

const ScModal = styled.div`
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;

  box-shadow: 1px 1px 8px #ccc;
  margin: 0 auto;
  width: 800px;
  padding: 16px;
  display: ${({ show }) => (show ? 'block' : 'none')};
  transform: translate(-50%, -50%);
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 500ms, transform 500ms;
`;

const ScCloseIcon = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
`;

const UserList = () => {
  //store
  const { usersList } = useSelector((state) => state.userStore.value);

  //hooks
  const dispatch = useDispatch();

  //state
  const [isShowModal, setIsShowModal] = useState(false);
  const [userDetail, setUserDetail] = useState(null);

  const userDetailHandler = (userId) => {
    instance
      .get(endpointUrls.userDetail(userId))
      .then(({ data }) => setUserDetail(data.data))
      .catch((err) => console.log(err));

    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
    setUserDetail(null);
  };

  useEffect(() => {
    dispatch(getUsersList());
  }, []);

  return (
    <>
      <ScModal show={isShowModal}>
        <ScCloseIcon onClick={() => closeModal()}>x</ScCloseIcon>

        <div>
          <UserDetailModal avatar={userDetail?.avatar} email={userDetail?.email} first_name={userDetail?.first_name} last_name={userDetail?.last_name} />
        </div>
      </ScModal>

      <ScGridContainer>
        {usersList.map(({ id, first_name, last_name, email, avatar }) => (
          <UserCard key={id} first_name={first_name} avatar={avatar} email={email} last_name={last_name} onClick={() => userDetailHandler(id)} />
        ))}
      </ScGridContainer>
    </>
  );
};

export default UserList;
