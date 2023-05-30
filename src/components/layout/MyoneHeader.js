import React, { useContext } from 'react';

import { Nav, Navbar, Container } from 'react-bootstrap';
import Icon from '@mdi/react';
import { mdiHomeCircle, mdiArrowLeftCircle, mdiWallet } from '@mdi/js';
import { useNavigate } from 'react-router-dom';

import { HeaderContext } from 'App';

const MyoneHeader = () => {
  const { $header } = useContext(HeaderContext);
  const headerInfo = $header[0];
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goHome = () => {
    // articles 경로로 이동
    navigate('/');
  };

  return (
    <header>
      {headerInfo.hideHeader || (
        <Navbar bg='primary' variant='dark' expand='lg'>
          <Container>
            <Navbar.Brand>
              {/* <Icon path={mdiWallet} size={1} /> */}
              {headerInfo.hideBack ? (
                <Icon path={mdiWallet} size={1} />
              ) : (
                <Icon path={mdiArrowLeftCircle} size={1} onClick={goBack} />
              )}
              &nbsp; {headerInfo.title}
            </Navbar.Brand>
            {headerInfo.hideHome || (
              <Nav className='ml-auto'>
                <Nav.Link onClick={goHome}>
                  <Icon path={mdiHomeCircle} size={1} />
                </Nav.Link>
              </Nav>
            )}
          </Container>
        </Navbar>
      )}
    </header>
  );
};

export default React.memo(MyoneHeader);
