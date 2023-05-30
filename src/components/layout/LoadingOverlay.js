import React, { useContext } from 'react';
import Spinner from 'assets/spinner-50.gif';
import 'assets/css/main.css';
import { LoadingContext } from 'App';
const LoadingOverlay = () => {
  const { $loading } = useContext(LoadingContext);
  const [loading] = $loading;

  return (
    <>
      {loading && (
        <div className='loadingBox'>
          <img src={Spinner} alt='로딩중' />
          <div className='loadingText'>Loading...</div>
        </div>
      )}
    </>
  );
};

export default React.memo(LoadingOverlay);
