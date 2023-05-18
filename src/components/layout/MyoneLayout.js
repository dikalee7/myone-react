import React from 'react';
import Header from './MyoneHeader';
import Footer from './MyoneFooter';
import ConfirmView from 'components/modal/ConfirmView';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import LoadingOverlay from './LoadingOverlay';

const MyoneLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Container style={{ minHeight: '80vh' }}>
          <Outlet />
        </Container>
        <ConfirmView />
      </main>
      <Footer />
      <LoadingOverlay />
    </React.Fragment>
  );
};

export default MyoneLayout;
