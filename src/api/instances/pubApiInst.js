import axios from 'axios';
const pubApi = function ($mo, $loading) {
  const setLoading = $loading[1];
  const axiosConfig = {
    baseURL: process.env.REACT_APP_PUBLIC_API_URL,
    timeout: 10000,
  };

  const instance = axios.create(axiosConfig);

  //요청 인터셉터 추가
  instance.interceptors.request.use(
    (config) => {
      // 요청을 보내기 전에 수행할 로직
      setLoading(true);
      return config;
    },
    (error) => {
      //요청 에러가 발생했을 때 수행할 로직
      console.log('************ PUBLICAPI REQUEST ERROR ************');
      console.log(JSON.stringify(error, null, 2));
      setLoading(false);
      return Promise.reject(error);
    }
  );

  //응답 인터셉터 추가
  instance.interceptors.response.use(
    (response) => {
      //응답에 대한 로직 작성
      setLoading(false);
      return response;
    },
    (error) => {
      // 응답 에러가 발생했을 때 수행할 로직
      $mo.alert({
        title: '[알림]',
        message: `API 호출 실패<br />[${error.message}]`,
      });

      setLoading(false);
      return Promise.reject(error);
    }
  );

  return { instance };
};
export default pubApi;
