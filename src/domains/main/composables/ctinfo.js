const ctinfo = () => {
  // -- 가이드 컨텐츠 정의 Start --
  const guideCtInfo = {
    title: '개발환경구축',
    subtitle: 'REACT',
    text: '개발 환경 및 공통작업 진행하며 정리',
    image: 'back-dev.jpg',
    gradient: 'to top right, rgba(51, 61, 64,.8), rgba(182, 199, 204,.8)',
    actions: [
      {
        name: '가이드',
        emnm: 'goPage',
        empr: { name: 'guide', params: {} },
      },
      {
        name: '공통',
        emnm: 'goPage',
        empr: { name: 'myoneGuide', params: {} },
      },
      {
        name: '코딩샘플',
        emnm: 'goPage',
        empr: { name: 'sampleBasic', params: {} },
      },
    ],
  };
  // -- 가이드 컨텐츠 정의 End --

  const contCtInfo1 = {
    title: '정책정보',
    subtitle: '',
    text: '공공서비스 및 혜택정보',
    image: 'back-service.jpg',
    gradient: 'to top right, rgba(68, 69, 8,.8), rgba(244, 245, 203,.8)',
    actions: [
      {
        name: '공공서비스',
        emnm: 'goPage',
        empr: { name: 'pubService', params: {} },
      },
      {
        name: '혜택',
        emnm: 'goPage',
        empr: { name: 'main', params: {} },
      },
    ],
  };

  const contCtInfo2 = {
    title: '',
    subtitle: '개발 예정',
    text: '컨텐츠 구상 중',
    image: 'back-traffic.jpg',
    gradient: 'to top right, rgba(125, 46, 9,.8), rgba(250, 115, 52,.8)',
    actions: [
      {
        name: '이동',
        emnm: 'goPage',
        empr: { name: 'main', params: {} },
      },
    ],
  };

  const contCtInfo3 = {
    title: '',
    subtitle: '개발 예정',
    text: '컨텐츠 구상 중',
    image: 'back-travel.jpg',
    gradient: 'to top right, rgba(3, 5, 33,.8), rgba(100, 108, 227,.8)',
    actions: [
      {
        name: '이동',
        emnm: 'goPage',
        empr: { name: 'main', params: {} },
      },
    ],
  };

  return [guideCtInfo, contCtInfo1, contCtInfo2, contCtInfo3];
};

export default ctinfo;






//   return { guideCtInfo, contCtInfo1, contCtInfo2, contCtInfo3 };
// }
