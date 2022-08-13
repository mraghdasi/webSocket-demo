import styled from 'styled-components';

const ScContainer = styled.div`
  display: flex;
  margin: 16px 0;
  justify-content: space-between;
  direction: rtl;
`;

const ScColor = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 25px auto;
  background-color: ${({ color }) => color};
`;

const ProductDetailModal = ({ name, color, year }) => {
  return (
    <>
      <ScColor color={color} />

      <ScContainer>
        <div>نام :</div>
        <div>{name}</div>
      </ScContainer>

      <ScContainer>
        <div>سال ساخت :</div>
        <div>{year}</div>
      </ScContainer>
    </>
  );
};

export default ProductDetailModal;
