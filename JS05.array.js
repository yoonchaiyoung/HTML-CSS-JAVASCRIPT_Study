// 배열
// 여러 개의 데이터를 1개의 변수에 담아둘 수 있다.
// javascript는 자료형 자체가 없기 때문에
// 어떠한 자료형이든 배열에 추가 가능하다. (함수까지 배열에 추가 가능)

var persons = [
  { name: "홍길동", age: 20 },
  { name: "임꺽정", age: 30 },
];
persons.push({ name: "라이언", age: 10 });
// 배열 원소 추가 : push
// java의 배열 : 배열의 길이 조절 X -> collection 사용
// javascript의 배열 : 배열의 길이 조절 O -> 마음대로 원소 추가 가능
console.log(persons);

console.log(persons[0]);
console.log(persons[1]);
console.log(persons[2]);

console.log(persons[0].name);
console.log(persons[1].age);
console.log(persons.length);
// 배열의 길이
console.log(persons[0].length);

// 이번에는 배열에 함수를 추가해보자.
const add = function (a, b) {
  return a + b;
};
persons.push(add);

console.log(persons);
console.log(persons[3]); // [Function: add]
// 배열의 index를 이용하여 함수를 호출 가능. 하므로
console.log(persons[3](20, 30));
// 이렇게 20 + 30의 값 (함수에 대입)을 구하는 것이 가능.

// 배열의 원소 확인
for (let i = 0; i < persons.length; i++) {
  console.log(
    "배열의 원소 : ",
    persons[i],
    ", 배열의 원소 자료형 : ",
    typeof persons[i]
  );
}

// 이렇게 배열의 index를 이용해서 배열의 원소를 확인하는 방법도 있지만
// 배열 객체의 내부 메소드인 forEach를 사용하여 배열 원소를 확인할 수도 있다.

persons.forEach(function (index, item) {
  console.log(index, item);
});
// forEach를 사용하면 위의 for문으로 배열의 index를 이용해서
// 배열의 원소를 확인하는 방법과 동일해진다.
