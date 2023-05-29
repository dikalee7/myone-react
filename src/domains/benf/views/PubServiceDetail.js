import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import WithModal from 'components/modal/WithModal';
const PubServiceDetail = ({ getParams, fullscreen, handleClose }) => {
  const { params, show } = getParams();

  return (
    <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>공공서비스 상세</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        추후 퍼블 적용 예정
        {params.data && <pre>{JSON.stringify(params.data[0], null, 2)}</pre>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary'>Close</Button>
        <Button variant='primary'>Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WithModal(PubServiceDetail);
