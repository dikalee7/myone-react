/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import Header from './MyoneHeader';
import Footer from './MyoneFooter';

import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import LoadingOverlay from 'components/layout/LoadingOverlay';
import ConfirmView from 'components/modal/ConfirmView';

import { useEmitter, useMo } from 'composables/utils/index';
import { LoadingContext, CmnContext, HeaderContext } from 'App';
import { baseHeader } from 'router/index';

const MyoneLayout = ({ children }) => {
  const $emitter = useCallback(useEmitter(), []);
  const $mo = useCallback(useMo($emitter), [$emitter]);
  const $loading = useState(false);
  const $header = useState(baseHeader);
  return (
    <>
      <CmnContext.Provider value={{ $emitter, $mo }}>
        <LoadingContext.Provider value={{ $loading }}>
          <HeaderContext.Provider value={{ $header }}>
            <Header />
            <main>
              <Container style={{ minHeight: '80vh' }}>
                <Outlet />
              </Container>
            </main>
            <Footer />
            <ConfirmView />
            <LoadingOverlay />
          </HeaderContext.Provider>
        </LoadingContext.Provider>
      </CmnContext.Provider>
    </>
  );
};

export default React.memo(MyoneLayout);
