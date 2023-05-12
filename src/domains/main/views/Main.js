import React, { useContext } from 'react';
import MainContent from '../components/MainContent';
import useCtinfo from '../composables/ctinfo';
import { AppContext } from 'App';

const Main = () => {
  const { $mo } = useContext(AppContext);
  const ctInfo = useCtinfo();

  const fnGoPage = (p) => {
    if (p && p.name === 'main') {
      $mo.alert({
        title: '준비중',
        message: '아직 제공되지 않습니다.',
      });
    } else {
      // this.$router.push({ name: p.name, params: p.params });
    }
  };

  return (
    <React.Fragment>
      {ctInfo.map((info, idx) => (
        <MainContent key={idx} ctInfo={info} fnGoPage={fnGoPage} />
      ))}
    </React.Fragment>
  );
};

export default Main;
