const benfCmn = () => {
  const pubApi = {
    list: {
      name: '공공서비스 목록',
      uri: '/gov24/v1/serviceList',
      method: 'get',
    },
    detail: {
      name: '공공서비스 상세내용',
      uri: '/gov24/v1/serviceDetail',
      method: 'get',
    },
    conditions: {
      name: '공공서비스 지원조건',
      uri: '/gov24/v1/supportConditions',
      method: 'get',
    },
  };

  return { pubApi };
};

export default benfCmn;
