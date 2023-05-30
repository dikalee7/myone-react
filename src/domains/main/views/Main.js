import React, { useContext, useEffect } from 'react';
import WithBase from 'components/layout/WithBase';
import MainContent from '../components/MainContent';
import useCtinfo from '../composables/ctinfo';
import { CmnContext } from 'App';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Main = ({ baseInit }) => {
  useEffect(() => {
    baseInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { $mo } = useContext(CmnContext);
  const ctInfo = useCtinfo();
  const navigate = useNavigate();

  const fnGoPage = (p) => {
    if (p && p.name === 'main') {
      $mo.alert({
        title: '준비중',
        message: '아직 제공되지 않습니다.',
      });
    } else {
      navigate(p.name);
    }
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Myone info</title>
        <meta name='description' content='This page is main of Myone.info' />
      </Helmet>
      {ctInfo.map((info, idx) => (
        <MainContent key={idx} ctInfo={info} fnGoPage={fnGoPage} />
      ))}
    </React.Fragment>
  );
};

export default React.memo(WithBase(Main, 'Main'));
