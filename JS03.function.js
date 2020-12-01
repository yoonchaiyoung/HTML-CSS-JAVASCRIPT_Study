// javascript 함수
// 특정 객체의 기능이 아닌 일반적인 함수(객체를 이용X)
// 함수 이름 = 변수 이름
// 익명 함수 : 이름이 없는 함수, 즉시 실행이 필요할 경우 사용.

// 함수를 실행시킬 때에는 func1(); 처럼 뒤에 괄호를 붙여줘야 한다.
// 그냥 func1; 이라고 하면 변수로 인식한다.
function foo(a, b) {}
// 이런 형태

function foo1(a, b) {
  return a + b;
}

console.log(foo1(1, 2));

var result1 = foo1(10, 20);
console.log(result1);
// 숫자형은 덧셈이 된다.

var result2 = foo1("Hello", "World");
console.log(result2);
// 문자열은 나란히 붙인다.

var result3 = foo1("hello", 30);
console.log(result3);
// 문자열과 숫자형이 같이 있으면 나란히 붙인다.

// 함수를 변수에 넣는 형태도 선언이 가능하다.
const foo2 = function (a, b) {
  return a + b;
};
var result4 = foo2(1, 2);
console.log(result4);
// 함수의 결과값의 객체를 변수로 지정하였다.
// 변수에 함수를 참조시킬 수 있다. (함수도 객체이기 때문에.)

var result5 = foo2("hello", "world");
console.log(result5);

var result6 = foo2("hello", 30);
console.log(result6);
