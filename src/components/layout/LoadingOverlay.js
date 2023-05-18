import React, { useContext } from 'react';
import styled from 'styled-components';
import Spinner from 'assets/spinner-50.gif';
import { AppContext } from 'App';
const LoadingOverlay = () => {
  const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #ffffffb7;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;

  const LoadingText = styled.div`
    font: 1rem 'Noto Sans KR';
    text-align: center;
  `;
  const { $loading } = useContext(AppContext);
  const [state] = $loading;

  return (
    <>
      {state ? (
        <Background>
          <img src={Spinner} alt='로딩중' />
          <LoadingText>Loading...</LoadingText>
        </Background>
      ) : null}
    </>
  );
};

export default LoadingOverlay;
