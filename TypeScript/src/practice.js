/*
  1. 절대 불변의 원칙을 세움(언어를 배울땐 기저에 깔린 원칙을 이해하는게 중요함)
  2. 값이라고 정의한 애들은 변수에 넣을수 있다.
  3. 객체도 값임. 함수도 값.
  4. new function 할경우 인스턴스
*/


// 디클레어 펑션 함수 정의문
function foo() {

}
// 함수 정의식
const bar = function bar() {

};
// 안쪽 펑션을 모름 이름이 없어도 돼. 함수를 값으로 취급할 땐 생략할 수 있다.
// 이름 생략하고 싶으면 괄호 씌우자. 만들자마자 즉시 콜
// 함수 정의 식에는 세미콜론 필요 정의문은 필요없음


let x = 10; // 재할당 가능, 

function foo1(x) {

  return 0;
}
/* 값으로서 전달하는 것이니 함수도 변수로 전달 가능, 당연히 함수도 리턴 가능
// 함수 합성?? 실행하는 순간 만들어내는??
함수를 인자로 받고 출력도 함수로 받음 하이오더 펑션 일급함수
어떤 계산 결과를 확정에서 내뱉지 못하지만 확정할 수 있는 코드를 내벹음

*/
// Es6
// 재귀함수를 쓸땐 함수 이름을 무조건 만들어야돼
// 무조건 이름을 생략하는건 아니야

// 어떤 상황에서도 값을 반환해. 언디파인드라도 반환해
const f = function (x) {

};

// 
const b = (x) => {

};

/* 식과 문으로 나눌 수 있어
 실행한 결과가 값으로 나오면 식!
 함수 호출도 식!
 실행했을때 값이 안나와 그러면 문
 if, while, switch 마지막에 세미콜론이 있냐 없냐 세미콜론은 식의 마무리
 문의 마무리는 세미콜론 안찍음
 , for 반복문의 특징은 단하나의 반복문만 알고 있으면 모든 반복을 할 수 있음

*/

/*
 함수란? 계산을 할 수 있게 하고 계산된 값을 돌려주는 것
 프리미티브 타입 값은 기본적으로 불변 이뮤터블
 에로우 펑션은 재귀 호출이 안되네!!?
*/


/*
  new 연산자란?
  1.빈 객체를 하나 만들어
  2. 객체를 함수한테 전달해
  3. this라고 명명해
  동적 바인딩
*/
const xx = {};
xx. name = 10;
// 동적 바인딩  만든다음에 새로 추가하는거

function foox() {
  this.name = 10;
}
// 동적 바인딩한거임
// 내부적으로는 프로토타입을 씀
// 나중에 더 자세하게 알려줄게

// 이렇게 만든걸 인스턴스 객체라고 함
const dy = new foox();

// 이런식으로 누가 만든 객체인지 확인 가능
if (dy instanceof foox) {
}
console.log(dy)
// 물리적으로 객체를 만들어
// 누가만든지 알 수 있어
// 일종의 위임이야
// 항상 내가 원하는 값이 뭔지 체크해야돼
// 객체라면 어떻게 체크해 못해;
// 객체를 온전하게 만들 수 있는 인증된 함수를 만든게 저 위에꺼야
// 확실하게 체크할 수 있네

// es6에는 이걸 좀더 명시화한 클래스가 존재해

class bar1 {
  //특징1 : 생성자 명시적이다.
  //특징2 : 뉴 안쓰면 에러 나서 편함
  constructor() {
    this.name = 10;
  }
}
// 함수는 뉴 연산자 없이 호출해도돼 
// 문제는?? new 연산자를 강제할 수 없어!! 대문자(뉴 붙여라)

// 이거랑 똑같아.  단순 신텍스 슈가라고 말하는 사람들이 있어
// 근데 꽤 다른 부분도 있어


// this 배우자 this 너무 어려워
const person = {
  name: '김민태',
  getName() {
    // 여기서 this 는 person 객체. 실행컨텍스트
    return this.name;
  }
}

// 호출하는 순간의 소유자
console.log(person.getName())

// 소유자가 벗겨지는 순간?
const man = person.getName;

// 실행하는 순간 확인이 안돼;; 이 경우 전역 객체에 연결돼
console.log(man())

// bind : this 를 bind 한 객체로 고정시켜!!!
person.getName.bind(person);
// arrow 함수는 this를 바꾸지 않아 바인드 이제 필요없네;;
// call 과 apply 비슷함

////////////////////
// call apply bind 모르면 광탈임 명확히 알것!!
////////////////////


// UI 개발은 자바스크립트 뿐만 아니라// 코드수준에서 적시하지 못함
// 이벤트 시스템을 이용해서 콜백을 무조건 써야돼 전형적인 콜백
// 이러한 콜백은 const man 과 같은 현상임 에러발생

// closer 

function foo11(x) {
  // 함수가 호출되면 스코프가 생김
  // 안쪽 펑션은 스코프 안에서 만들어짐
  // 안쪽 펑션이 자기 바깥에 있는 스코프까지 기억하고 있는 것
  // 클로저 영역에
  // 값을 보호할 때 많이 쓴다
  return function bar11() {
    return x;
  }
}

const v = foo11(10);
console.log(v());

// 모듈패턴이라고함 은닉성 객체지향 클래스랑 비슷하네
function makePerson() {
  let age = 10;
  return {
    getAge() {
      return age;
    }
  }
}

let p = makePerson();
console.log(p)

// 비동기를 동기처럼??

setTimeout(function() {
  console.log('ASSA'); 
}, 1000);

// 프라미스의 등장
// 프라미스 객체가 호출을 하면서 첫번째 인자와 두번째 인자에 함수를 넣어줌
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    //이것도 클로저네 리졸브도
    resolve("응답")
  }, 1000)
})
// resolve를 호출하면 then 의 함수를 호출해줌
// 대너블 객체 프라미스 객체
// 이런걸 체이닝이라고 함
p1
  .then(() => {

  })
  .then(() => {

  })

// 비동기 함수의 등장!
async function main() {
  console.log('1');

  console.log('2');
}


//커링?
function fox(a,b,c) {

}
// 인자별로 쪼개는거
// 근데 클로저로 커링을 할 수 있는거야
function fox(a) {
  return function(b) {
    return function(c){
      return a + b + c;
    }
  }
}

// 리덕스 시작!

