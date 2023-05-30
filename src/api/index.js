import queryString from 'query-string';
import pubApi from './instances/pubApiInst';

export default function api($mo, $loading) {
  const pubApiInst = pubApi($mo, $loading).instance;
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
        $mo.alert({
          title: 'API 호출 실패',
          message: result.statusText,
        });
      } else {
        resolve(result);
      }
    });
  }

  return { pubApiCall };
}
