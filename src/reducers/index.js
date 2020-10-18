import { FETCH_REQUEST, FETCH_SUCCESS } from "../actions";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
