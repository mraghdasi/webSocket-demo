import styled from 'styled-components';
import ProductDetailModal from './ProductDetailModal';

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

const ProductCard = ({ name, color, year, onClick, ...props }) => {
  return (
    <ScCard key={props.key}>
      <ProductDetailModal color={color} name={name} year={year} />

      <hr />

      <ScButton onClick={onClick}>جزئیات محصول</ScButton>
    </ScCard>
  );
};

export default ProductCard;
