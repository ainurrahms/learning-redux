import { HOME } from '@/api/actions/ActionTypes';

export default {
  increaseCounter() {
    return (dispatch) =>
      dispatch({
        type: HOME.INCREMENT_COUNT
      });
  },
  decrementCounter() {
    return (dispatch) =>
      dispatch({
        type: HOME.DECREMENT_COUNT
      });
  }
};
