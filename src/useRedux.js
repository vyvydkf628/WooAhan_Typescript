import {createStore} from './redux';

function reducer(state = {}, action) {
  if (action.type === 'increment') {
    return {
      ...state,
      count: state.count ? state.count +1 : 1,
    };
  }
  return state;
}
const store = createStore(reducer);
//이뮤터블하게 만들어야돼
store.subscribe(update);
function update() {
  console.log(store.getState());
}

// 리덕스의 첫번째 규칙 컴포넌트는 리덕스의 상태를 바꾸지 못한다!.
store.dispatch({ type: "increment"})
console.log(store.getState())