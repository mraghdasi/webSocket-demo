import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ScContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 8px 14px;
`;

const Price = () => {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const ws = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin');

    ws.onmessage = (msg) => {
      setPrices((prevState) => ({ ...prevState, ...JSON.parse(msg.data) }));
    };

    return () => ws.close();
  }, []);

  return (
    <>
      <h1>قیمت لحظه‌ای ارزها</h1>

      <ScContainer>
        <span>bitcoin</span>
        <span>{prices?.bitcoin || 0} $</span>
      </ScContainer>

      <ScContainer>
        <span>ethereum</span>
        <span>{prices?.ethereum || 0} $</span>
      </ScContainer>

      <ScContainer>
        <span>monero</span>
        <span>{prices?.monero || 0} $</span>
      </ScContainer>

      <ScContainer>
        <span>litecoin</span>
        <span>{prices?.litecoin || 0} $</span>
      </ScContainer>
    </>
  );
};

export default Price;
