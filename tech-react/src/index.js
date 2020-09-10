import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");

const sessionList = [
  { id: 1, title: "1회차 : Overview"},
  { id: 2, title: "2회차 : React"},
  { id: 3, title: "3회차 : Redux"},
  { id: 4, title: "4회차 : 컴포넌트 만들기"},
];

ReactDOM.render(
  <React.StrictMode>
    <App store={ { sessionList } } />
  </React.StrictMode>
)


/* 밑에 두가지는 프라미스와 연관이 깊음

*/
Promise();

function* foo() {

}

async function bar() {

}

// x 값이 확정되는 순간을 지연시킴
const x = () => 10;
const y = x() * 10;

// 지연안함
const x = 10;
const y = x + 10;

// 함수를 반환하는 특징을 가지고 지연을 흉내낼 수 있음
// promise 도 지연과 비슷하다??
const p = new Promise(function(resolve, reject) {
  setTimeout(() => {
    // 결국 지연호출을 하는것이다. 왜냐? 클로저 이용
    resolve("1");
  })
})

p.then(function(x) {
  console.log(x)
})

function* make() {
  let num = 1;
  while(true) {
    yield num++; // equal return in generate
  }
}

const i = make();

console.log(i); // 1이 아니라 객체를 준다?? 왜지?? 제네레이터 라는 객체야
// 코루틴이라고 하는 함수의 구현체

// 함수는 인자(입력값) 를 받고 무언가 계산을 한다음 어떤 값을 리턴하는 것
// 명시적 리턴이 없으면 언디파인드
// 보통 리턴이 없으면 프로시저 있으면 함수

// 함순데 리턴을 여러번 할 수 있게하면 어떨까????????
// 왜 제네레이터? 계속 어떤 값을 생성한다.

i.next();

// 기존 함수와 달리 함수가 어떤 상태를 가지고 있는 상태에서 바깥 쪽 영역과
// 커뮤니케이션을 하는 느낌

const delay = ms => new Promise(() => setTimeout(resolve, ms));
function* main() {
  yield delay(3000);
  console.log("3초 뒤 ")
}

const it = main();

const { value } = it.next();

value.then(() => {

})

// async await는 프라미스에 최적화되어 있다.
// yield 는 프라미스에 상관없이 일반 함수에서 쓸 수 있다.
// 사가가 제너레이터로 작성되어 있는 이유
// async 함수의 내부는 제너레이터로 되어있다!!