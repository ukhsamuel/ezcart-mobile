import { NOTIFY, LOADING } from '../type';

export const loading = data => async dispatch => {
  // console.log(68666)
  dispatch({
    type: LOADING,
    payload: data,
  });
};

export const notify = data => async dispatch => {
  console.log(87878)
  dispatch({
    type: NOTIFY,
    payload: data,
  });
};

const ResponseActions = {
  loading,
  notify,
};

export default ResponseActions;
