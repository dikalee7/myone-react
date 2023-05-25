import React, { useEffect, useContext } from 'react';
import { AppContext } from 'App';
function WithBase(InputComponent, _componentName) {
  return function OutputComponent(props) {
    const { $loading } = useContext(AppContext);
    const setLoading = $loading[1];

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const baseInit = () => {
      setLoading(true);
    };

    return <InputComponent {...props} baseInit={baseInit} />;
  };
}

export default WithBase;
