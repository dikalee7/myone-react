import React from 'react'
import MainContent from '../components/MainContent';
import useCtinfo from '../composables/ctinfo'


const Main = () => {
  const ctInfo = useCtinfo();
  console.log(ctInfo.length);

  return (
    <React.Fragment>
      {ctInfo.map((info, idx) => (
        <MainContent key={idx} ctInfo={info} />
      ))}
    </React.Fragment>
  );
}

export default Main