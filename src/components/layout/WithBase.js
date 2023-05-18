import React, { useEffect } from 'react';
function WithBase(InputComponent, componentName) {
  return function OutputComponent(props) {
    useEffect(() => {
      console.log(`${componentName} mounted`);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <InputComponent {...props} />;
  };
}

export default WithBase;
