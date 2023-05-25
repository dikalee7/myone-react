/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import Header from './MyoneHeader';
import Footer from './MyoneFooter';

import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import LoadingOverlay from 'components/layout/LoadingOverlay';
import ConfirmView from 'components/modal/ConfirmView';

import { useEmitter, useMo } from 'composables/utils/index';
import { AppContext } from 'App';

const MyoneLayout = ({ children }) => {
  const $emitter = useCallback(useEmitter(), []);
  const $mo = useCallback(useMo($emitter), [$emitter]);
  const $loading = useState(false);
  return (
    <>
      <AppContext.Provider value={{ $emitter, $mo, $loading }}>
        <Header />
        <main>
          <Container style={{ minHeight: '80vh' }}>
            <Outlet />
          </Container>
        </main>
        <Footer />
        <ConfirmView />
        <LoadingOverlay />
      </AppContext.Provider>
    </>
  );
};

export default React.memo(MyoneLayout);
