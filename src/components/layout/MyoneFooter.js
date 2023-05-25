import React from 'react';
import { Container } from 'react-bootstrap';

const MyoneFooter = () => {
  return (
    <footer style={{ textAlign: 'center' }}>
      <Container style={{ marginTop: '17px', marginBottom: '17px' }}>
        &copy; 2023 DIKALEE. All Rights Reserved.
      </Container>
    </footer>
  );
};

export default React.memo(MyoneFooter);
