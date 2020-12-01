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
var person1 = function (name, age) {
  this.name = name;
  this.age = age;
  return {
    print: function () {
      console.log("이름 : %s, 나이 : %d", name, age);
    },
  };
};
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
