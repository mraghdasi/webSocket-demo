import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ScHeader = styled.div`
  box-shadow: 1px 1px 7px #ccc;
  grid-area: head;
  padding: 25px;
  align-self: start;
`;

const ScContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  const { usersList } = useSelector((state) => state.userStore.value);
  const [admin, setAdmin] = useState();

  useEffect(() => {
    setAdmin(...usersList.filter((user) => user.email === 'emma.wong@reqres.in'));
  }, [usersList]);

  return (
    <ScHeader>
      <ScContainer>
        {admin && (
          <div>
            {admin?.first_name} - {admin?.last_name} - {admin?.email}
          </div>
        )}
        <h3>header</h3>
      </ScContainer>
    </ScHeader>
  );
};

export default Header;
