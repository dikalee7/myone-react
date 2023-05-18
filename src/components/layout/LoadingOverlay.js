import React, { useContext } from 'react';
import Spinner from 'assets/spinner-50.gif';
import { AppContext } from 'App';
import 'assets/css/main.css';
const LoadingOverlay = () => {
  const { $loading } = useContext(AppContext);
  const [loading] = $loading;

  return (
    <>
      {!loading || (
        <div className='loadingBox'>
          <img src={Spinner} alt='로딩중' />
          <div className='loadingText'>Loading...</div>
        </div>
      )}
    </>
  );
};

export default LoadingOverlay;