import React, { useEffect } from 'react';

const WithBase = (InputComponent, componentName) => {
  useEffect(() => {
    console.log(`${componentName} mounted`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (props) => {
    return <InputComponent {...props} />;
  };
};

export default WithBase;
