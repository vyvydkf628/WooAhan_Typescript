import {createStore} from './redux';

const INCREMENT = 'increment'
const RESET = 'reset'
function reducer(state = {}, action) {
  if (action.type === 'increment') {
    return {
      ...state,
      count: state.count ? state.count +1 : 1,
    };
  } else if (action.type === RESET) {
    return {
      ...state,
      count: action.resetCount,
    }
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

function foo(type) {
  return {
    type: type
  }
}
function increment() {
  store.dispatch(foo(INCREMENT))
}

function actionCreator(type, data) {
  return {
    ...data,
    type: type,
  }
}
function reset() {
  store.dispatch(actionCreator(RESET, { resetCount: 10}))
}