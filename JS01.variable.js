// variable : 변수
// javascript에서의 변수는 자료형이 따로 존재하지 않는다.
// java처럼 int i = 10; 이런식으로 변수명 앞에 자료형을 따로 붙이지 않고,
// 대입되는 값의 자료형에 따라 자동으로 변화된다.
// 이것이 바로 동적 형 지정. 이라고 한다.

console.log("hello~");

// 옛날 방식
var test1 = 10;
console.log(test1);
console.log(test1 == 10);
console.log(test1 == "10");
console.log(test1 === 10);
console.log(test1 === "10");

if (test1 === 10) {
  console.log("10");
  var test2 = 20;
}
console.log(test2);
// 출력값 : 20
console.log(test1 + test2);
// 출력값 : 30

// 변수 test2에 대해 호이스팅 현상이 일어난다.
// test2는 조건문 안에서 선언되었기 때문에 전역변수가 아닌 지역변수인데
// 호이스팅 현상이 일어나서 조건문 밖에서도 사용할 수 있음.

// 이렇게 모든 변수가 전역변수로 사용되면 변수 관리가 어려워진다.

// 새로운 방식
const test3 = 10;
let test4 = 20;
// var 대신 -> const, let 방식 사용
// const : 변경 가능 X. 상수.
// let : 변경 가능 O

// test3 = 20;
// const로 지정한 변수 -> 변경 가능 X -> 에러 발생
console.log("변경 전 test4", test4);
test4 = 50;
console.log("변경 후 test4", test4);
// let로 지정한 변수 -> 변경 가능 O -> 정상 작동

if (test3 == 10) {
  const test5 = 10;
}
// console.log(test5):
// console.log(test3 + test5);
// 호이스팅 현상 X -> 에러 발생 -> test5 라는 변수 존재 X
// const, let으로 지정된 변수는 호이스팅 현상이 일어나지 않는다!

// scope : 변수 사용가능 범위
