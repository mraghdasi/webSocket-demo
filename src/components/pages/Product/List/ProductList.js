import { instance } from 'api';
import { endpointUrls } from 'constant/endpoints';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsList } from 'redux/middleware/product/getProductsList';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';

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

const ScInput = styled.input`
  padding: 6px 10px;
`;

const ScLabel = styled.label`
  margin-left: 10px;
`;

const ScContainer = styled.div`
  margin: 30px 0;
`;

const ProductList = () => {
  //store
  const { productsList } = useSelector((state) => state.productStore.value);
  console.log('productsList', productsList);

  //hooks
  const dispatch = useDispatch();

  //state
  const [isShowModal, setIsShowModal] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const [filteredProduct, setFilteredProduct] = useState([]);

  const productDetailHandler = (productId) => {
    instance
      .get(endpointUrls.productDetail(productId))
      .then(({ data }) => setProductDetail(data.data))
      .catch((err) => console.log(err));

    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
    setProductDetail(null);
  };

  const onSearchProductHandler = (e) => {
    if (e.target.value.length > 3 && !isNaN(e.target.value) && +e.target.value < 2004) setFilteredProduct(productsList.filter(({ year }) => year === +e.target.value));
    else setFilteredProduct([]);
  };

  useEffect(() => {
    dispatch(getProductsList());
  }, []);

  return (
    <>
      <ScModal show={isShowModal}>
        <ScCloseIcon onClick={() => closeModal()}>x</ScCloseIcon>

        <div>
          <ProductDetailModal color={productDetail?.color} name={productDetail?.name} year={productDetail?.year} />
        </div>
      </ScModal>

      <ScContainer>
        <ScInput onChange={onSearchProductHandler} id='year' />
        <ScLabel htmlFor='year'>سال ساخت</ScLabel>
      </ScContainer>

      <ScGridContainer>
        {filteredProduct.length === 0
          ? productsList.map(({ id, name, year, color }) => <ProductCard color={color} key={id} onClick={() => productDetailHandler(id)} year={year} name={name} />)
          : filteredProduct.map(({ id, name, year, color }) => <ProductCard color={color} key={id} onClick={() => productDetailHandler(id)} year={year} name={name} />)}
      </ScGridContainer>
    </>
  );
};

export default ProductList;
