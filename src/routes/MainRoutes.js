import Header from 'components/UI/Layout/Header/Header';
import SideBar from 'components/UI/Layout/Sidebar/SideBar';
import { routes } from 'constant/constantRoutes';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import styled from 'styled-components';

const ScContainer = styled.div`
  display: grid;
  grid-template-areas:
    'head side'
    'main side';
  grid-template-columns: 1fr 183px;
  text-align: right;
  grid-template-rows: auto 1fr;
`;

const ScMainContent = styled.div`
  grid-area: main;
  padding: 10px 25px;
`;

const Home = lazy(() => import('components/pages/Home/Home'));
const Users = lazy(() => import('components/pages/Users/Users'));
const Products = lazy(() => import('components/pages/Product/Products'));
const Price = lazy(() => import('components/pages/Price/Price'));

const MainRoutes = () => {
  const routesList = [
    {
      path: routes.userList,
      element: <Users />,
    },
    {
      path: routes.home,
      element: <Home />,
    },
    {
      path: routes.productList,
      element: <Products />,
    },
    {
      path: routes.priceList,
      element: <Price />,
    },
  ];

  return (
    <ScContainer>
      <Header />
      <SideBar />
      <ScMainContent>
        <Suspense fallback='loading...'>
          <Routes>
            {routesList.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </Suspense>
      </ScMainContent>
    </ScContainer>
  );
};

export default MainRoutes;
