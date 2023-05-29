import React from 'react';
import Modal from 'react-bootstrap/Modal';
import WithModal from 'components/modal/WithModal';
const PubServiceDetail = ({ getParams, fullscreen, handleClose }) => {
  const { params, show } = getParams();

  return (
    <Modal show={show} fullscreen={fullscreen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>공공서비스 상세</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {params.data && <pre>{JSON.stringify(params.data[0], null, 2)}</pre>}
      </Modal.Body>
    </Modal>
  );
};

export default WithModal(PubServiceDetail);
