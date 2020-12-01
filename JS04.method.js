// javascript 메소드
// 객체의 기능(객체를 이용O)

// 프로토타입 객체인 function을 이용해서 메소드를 추가시켜보자.
function person(name, age) {
  this.name = name;
  this.age = age;
}
person.prototype.walk = function (speed) {
  console.log("%s가 %d의 속도로 걸어간다.", this.name, this.speed);
};
// 새로운 walk 라는 property를 추가함.

// prototype property : 프로토타입 객체를 참조하고 있는 특성

// 즉, person.prototype : 프로토타입 객체인 function person(name, age)를 참조 중이다.
