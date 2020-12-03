// javascript에서 객체를 만드는 방식
// 1. object 타입
var person = {
  name: null,
  age: 0,
  print: function () {
    console.log("이름 : %s, 나이 : %d", this.name, this.age);
  },
};
// 변수의 메소드를 함수로 지정

person.print();
person.name = "윤채영";
person.age = 23;
person.print();

// 2. 프로토타입(객체를 만들어낼 원형)
const sample1 = {};
console.log(sample1);
// 이렇게 만들어진 객체 : prototype object
// 아무것도 없는 객체
// 여기에 더 추가 가능
sample1["name"] = "윤채영";
sample1["age"] = 23;
console.log(sample1);
// {key: value, key: value}의 python의 딕셔너리 형태와 동일한 형태

// json? javascript object notation(표현식)
// 자바스크립트 객체 모양. 이라는 뜻
// 자바스크립트에서 사용하는 객체 표현식

sample1.push = {
  name: "홍길동",
  age: 20,
};
console.log(sample1);
// 원래 python의 딕셔너리에서는 "name" : "윤채영" 이런식으로
// key에도 문자열이 들어가면 쌍따옴표를 붙였었는데
// javascript 에서는 아니다.
// key는 그냥 쓰고 value의 자료형에만 신경써주면 된다.

const sample2 = {
  name: "윤",
  age: 23,
  // printme: () => {
  //   console.log("sample2의 printme : ", sample2.name, sample2.age);
  // };
};
// 이러면 에러 발생.
// 이유?
// 함수도 자바스크립트에서는 객체이다. 객체 - 데이터와 기능을 가진다.
// printme 안에는 name, age가 없다.
// printme 안에서 name, age에 접근할 수 있는 방법이 필요하다.
// this를 활용하면 된다.
// 그러면 printme를 포함하고 있는 sample2의 name, age를 가져올 수 있게 된다.

// sample2.name, sample2.age -> sample2의 name, age를 가져오겠다.

const sample3 = {
  name: "AAA",
  age: 30,
  printme: () => {
    console.log("sample3의 printme : ", this.name, this.age);
  },
};
console.log(sample3.printme());
// 출력값 : undefined, undefined 라고 뜬다.
// 이유?
// 자바스크립트는 괄호 단위로 코드가 실행.
// 그런데 name, age가 초기화가 아직 다 되지 않은 상태에서
// printme 객체를 통해 불러왔으니 undefined 상태라고 출력되는 것.

var person1 = function (name, age) {
  this.name = name;
  this.age = age;
  return {
    print: function () {
      console.log("이름 : %s, 나이 : %d", name, age);
    },
  };
};
console.log("person1의 정보 파악 : ", person1());
// 출력값 : [Function: print]

var person1_obj = person1("윤채", 23);
person1_obj.print();
// 변수 자체를 함수 객체로 지정

// typeof ~ : ~의 자료형 출력
console.log(typeof person);
console.log(typeof person1);
console.log(typeof person1_obj);
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// null : 변수O, 변수가 참조하고 있는 객체X
// undefined : 변수 자체가 X or 변수가 초기화가 되지 않은 경우
