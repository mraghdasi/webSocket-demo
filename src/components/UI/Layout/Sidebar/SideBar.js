import { routes } from 'constant/constantRoutes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ScSideBar = styled.div`
  grid-area: side;
  background-color: #374151;
  color: #d1d5db;
  position: fixed;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 183px;
`;

const ScUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ScLi = styled.li`
  padding: 8px 16px;
  margin: 8px 6px;
`;

const ScLink = styled(Link)`
  text-decoration: none;
  color: #d1d5db;
  &:active {
    color: #d1d5db;
  }
`;

const SideBar = () => {
  return (
    <ScSideBar>
      <ScUl>
        <ScLi>
          <ScLink to={routes.home}>صفحه اصلی</ScLink>
        </ScLi>

        <ScLi>
          <ScLink to={routes.userList}>لیست کاربران</ScLink>
        </ScLi>

        <ScLi>
          <ScLink to={routes.productList}>لیست محصولات</ScLink>
        </ScLi>

        <ScLi>
          <ScLink to={routes.priceList}>قیمت لحظه‌ای</ScLink>
        </ScLi>
      </ScUl>
    </ScSideBar>
  );
};

export default SideBar;
