import React, { useState, forwardRef, useImperativeHandle } from 'react';
// import Button from 'react-bootstrap/Button';
function WithModal(InputComponent, _componentName) {
  return forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
      // 부모 컴포넌트에서 사용할 함수를 선언
      handleOpen,
    }));

    // eslint-disable-next-line no-unused-vars
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [params, setParams] = useState({});

    const handleClose = () => {
      setShow(false);
    };

    const handleOpen = (params) => {
      setFullscreen(props.full);
      setParams(params);
      setShow(true);
    };

    const getParams = () => {
      return { params, show };
    };

    return (
      <InputComponent
        {...props}
        getParams={getParams}
        handleOpen={handleOpen}
        handleClose={handleClose}
        fullscreen={fullscreen}
      />
    );
  });
}

export default WithModal;
