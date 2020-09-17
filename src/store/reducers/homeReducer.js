import initialState from './initialState';

export default function userReducer(state = initialState.home, action) {
  switch (action.type) {
    case 'SET_CURRENTLYLOADING':
      return {
        ...state,
        home: action.payload,
      };

    default:
      return state;
  }
}
