/* eslint-disable indent */
export const loadingReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action) {
    case 'START': {
      return true;
    }
    case 'STOP': {
      return false;
    }
  }
};
