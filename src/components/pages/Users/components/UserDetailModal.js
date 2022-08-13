import styled from 'styled-components';

const ScContainer = styled.div`
  display: flex;
  margin: 16px 0;
  justify-content: space-between;
  direction: rtl;
`;

const ScImage = styled.img`
  border-radius: 50%;
  margin: 25px auto;
  display: block;
`;

const UserDetailModal = ({ avatar, first_name, last_name, email }) => {
  return (
    <>
      <ScImage src={avatar} />

      <ScContainer>
        <div>نام :</div>
        <div>{first_name}</div>
      </ScContainer>

      <ScContainer>
        <div>نام خانوادگی :</div>
        <div>{last_name}</div>
      </ScContainer>

      <ScContainer>
        <div>ایمیل :</div>
        <div>{email}</div>
      </ScContainer>
    </>
  );
};

export default UserDetailModal;
