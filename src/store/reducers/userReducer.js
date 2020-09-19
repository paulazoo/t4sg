import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };

    case 'SET_ISMASTER':
      return {
        ...state,
        isMaster: action.payload,
      };

    case 'SET_MASTERDATA':
      return {
        ...state,
        masterData: action.payload,
      };

    default:
      return state;
  }
}
