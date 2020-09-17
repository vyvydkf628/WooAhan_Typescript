import { createStore} from './redux';

function reducer(state = { counter: 0 }, action) {
  switch(action.type) {
    case 'inc':
      return {
        ...state,
        counter: state.counter + 1,
      }
      break;
      default:
        return {...state };
  }
}