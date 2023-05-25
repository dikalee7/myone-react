import axios from 'axios';
const pubApi = function () {
  //   const { cmn, mo } = useUtils();
  const axiosConfig = {
    baseURL: process.env.REACT_APP_PUBLIC_API_URL,
    timeout: 10000,
  };

  const instance = axios.create(axiosConfig);

  //요청 인터셉터 추가
  instance.interceptors.request.use(
    (config) => {
      // 요청을 보내기 전에 수행할 로직
      //   cmn.setLoading(true);
      return config;
    },
    (error) => {
      //요청 에러가 발생했을 때 수행할 로직
      console.log('************ PUBLICAPI REQUEST ERROR ************');
      console.log(JSON.stringify(error, null, 2));
      //   cmn.setLoading(false);
      return Promise.reject(error);
    }
  );

  //응답 인터셉터 추가
  instance.interceptors.response.use(
    (response) => {
      //응답에 대한 로직 작성
      //   cmn.setLoading(false);
      return response;
    },
    (error) => {
      // 응답 에러가 발생했을 때 수행할 로직
      //   mo.confirm({
      //     title: 'API 호출 실패',
      //     message: `메인으로 이동하시겠습니까?<br />[${error.message}]`,
      //   }).then((rslt) => {
      //     if (rslt) {
      //       router.replace('main');
      //     }
      //   });
      //   cmn.setLoading(false);
      return Promise.reject(error);
    }
  );

  return { instance };
};
export default pubApi;
