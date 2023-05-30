import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        <Container>
          <Row>
            {/* <Col>
              <div className='d-grid'>
                <Button variant='secondary'>취소</Button>
              </div>
            </Col> */}
            <Col>
              <div className='d-grid gap-2'>
                <Button variant='primary' onClick={handleClose}>
                  닫기
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Footer>
    </Modal>
  );
};

export default WithModal(PubServiceDetail);
