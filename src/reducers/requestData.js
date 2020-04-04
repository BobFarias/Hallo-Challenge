import { XXXX_REQUEST_XXXX } from '../actions/actionTypes';

  const initialState = {
    response_data: ''
  };

  export const requestData = (state = initialState, action) => {
    switch (action.type) {
      case XXXX_REQUEST_XXXX:
        return {
          ...state,
          response_data: action.response_data
        };
      default:
        return state;
    }
  };