import queryString from 'query-string';
import pubApi from './instances/pubApiInst';

const pubApiInst = pubApi().instance;
// const { mo } = useUtils();

async function pubApiCall(url, param, errPage = '', errDirect = false) {
  const response = await pubApiInst.get(
    `${url}?${queryString.stringify(param)}&serviceKey=${
      process.env.REACT_APP_PUBLIC_API_KEY
    }`
  );

  const result = {
    ...response.data,
    status: response.status,
    statusText: response.statusText,
  };

  return new Promise((resolve) => {
    if (!errDirect && result.status !== 200) {
      alert('API 호출 실패');
      //   mo.alert({
      //     title: 'API 호출 실패',
      //     message: result.statusText,
      //   }).then(() => {
      //     if (errPage) router.replace(errPage);
      //   });
    } else {
      resolve(result);
    }
  });
}

export { pubApiCall };
