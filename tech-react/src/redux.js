// 원하면 두개 만들수 있는데 아묻 안만들어 ㅎ

export function createStore(reducer) {
  let state;

  const getState = () => {
    // 자바스크립트의 모든 객체는 참조형
    // 근데 이건 얕은복사
    return { ...state };
  }
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(fn => fn());
  }
  const listeners = [];
  const subscribe = (fn) => {
    listeners.push(fn);
  }
  return {
    getState,
    dispatch,
    subscribe,
  }
}