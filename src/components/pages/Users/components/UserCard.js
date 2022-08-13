import styled from 'styled-components';
import UserDetailModal from './UserDetailModal';

const ScCard = styled.div`
  box-shadow: 1px 1px 8px #ccc;
  padding: 14px 18px;
  border-radius: 8px;
`;

const ScButton = styled.button`
  background-color: #374151;
  color: #d1d5db;
  width: 100%;
  padding: 8px 16px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 8px;
  transition: all 500ms;
  border: none;
  outline: none;

  &:hover {
    background-color: #535e71;
  }
`;

const UserCard = ({ avatar, email, first_name, last_name, onClick, ...props }) => {
  return (
    <ScCard key={props.key}>
      <UserDetailModal avatar={avatar} email={email} first_name={first_name} last_name={last_name} />

      <hr />

      <ScButton onClick={onClick}>جزئیات کاربر</ScButton>
    </ScCard>
  );
};

export default UserCard;
