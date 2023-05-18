import React from 'react';
import Header from './MyoneHeader';
import Footer from './MyoneFooter';
import ConfirmView from 'components/modal/ConfirmView';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const MyoneLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Container style={{ minHeight: '80vh' }}>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ConfirmView />
    </React.Fragment>
  );
};

export default MyoneLayout;
