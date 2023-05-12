import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AppContext } from 'App';

const ConfirmView = () => {
    const [show, setShow] = useState(false);
    const [modal, setModal] = useState({
    title: '',
    message: '',
    options: {
        color: 'indigo',
        width: 400,
        zIndex: 3000,
        noconfirm: false,
    },
    });
    
    const { $emitter } = useContext(AppContext);

    useEffect(() => {
    $emitter.on('showAlert', handleShow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClose = () => {
    setShow(false);
    }
    const handleShow = ({title, message, options}) => {
    console.log(title);
    setModal({
        title: title,
        message: message,
        options: Object.assign(modal.options, options),
    });

    setShow(true);
    };

    const agree = () => { 
        $emitter.emit('returnAlert', true);
        setShow(false);
    }

    const cancel = () => { 
        $emitter.emit('returnAlert', false);
        setShow(false);
    }

    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{modal.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{modal.message}</Modal.Body>
          <Modal.Footer>
            {!modal.options.noconfirm && (
              <Button variant='secondary' onClick={cancel}>
                Cancel
              </Button>
            )}

            <Button variant='primary' onClick={agree}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default ConfirmView