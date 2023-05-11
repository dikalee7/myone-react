import React from 'react'

import { Nav, Navbar, Container } from 'react-bootstrap';
import Icon from '@mdi/react';
import {  mdiHomeCircle, mdiWallet } from '@mdi/js';
import { useNavigate } from 'react-router-dom';


const MyoneHeader = () => {
    const navigate = useNavigate();

    // const goBack = () => {
    //     // 이전 페이지로 이동
    //     navigate(-1);
    // };

    const goHome = () => {
        // articles 경로로 이동
        navigate('/');
    };

  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand>
            <Icon path={mdiWallet} size={1} />
            {/* <Icon path={mdiArrowLeftCircle} size={1} /> */}
            &nbsp;&nbsp;&nbsp; MY ONE
          </Navbar.Brand>
          <Nav className='ml-auto'>
            <Nav.Link onClick={goHome}>
              <Icon path={mdiHomeCircle} size={1} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyoneHeader