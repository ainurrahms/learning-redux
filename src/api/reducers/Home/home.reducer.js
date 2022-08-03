import { HOME } from '@/api/actions/ActionTypes';

const initState = {
  count: 0
};

function reducer(state = initState, action) {
  const { type } = action;

  switch (type) {
    case HOME.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case HOME.DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

export default reducer;
