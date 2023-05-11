import React from 'react'
import Header from './MyoneHeader';
import Footer from './MyoneFooter'
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const MyoneLayout = ({children}) => {
  return (
    <>
      <Header />
      <Container style={{ minHeight: '80vh' }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}

export default MyoneLayout