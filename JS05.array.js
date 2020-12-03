// 배열
// 여러 개의 데이터를 1개의 변수에 담아둘 수 있다.
// javascript는 자료형 자체가 없기 때문에
// 어떠한 자료형이든 배열에 추가 가능하다. (함수까지 배열에 추가 가능)
// python에서의 list에 해당되는 개념.

var persons = [
  { name: "홍길동", age: 20 },
  { name: "임꺽정", age: 30 },
];
persons.push({ name: "라이언", age: 10 });
persons.push("김이박");
// 배열 원소 추가 : push
// java의 배열 : 배열의 길이 조절 X -> collection 사용
// javascript의 배열 : 배열의 길이 조절 O -> 마음대로 원소 추가 가능
console.log(persons);

// index를 활용 -> 배열에 있는 원소 꺼내기
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
console.log(persons[4]); // [Function: add]
// 배열의 index를 이용하여 함수를 호출 가능. 하므로
console.log(persons[4](20, 30));
// 이렇게 20 + 30의 값 (함수에 대입)을 구하는 것이 가능.

// 배열의 원소 확인
// 배열 순회(처음~끝까지 전체를 도는 것)
// 방법 총 3가지 있음.
// for, forEach, map(이게 제일 중요!)

// 1. for문을 이용한 배열 순회
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

// 2. forEach문을 이용한 배열 순회
persons.forEach(function (index, item) {
  console.log(index, item);
});
// for문은 우리가 직접 변수 지정해야하고 복잡.
// forEach는 최대 변수를 2개 가질 수 있다.
// arr 배열의 원소와 index가 하나하나씩 들어온다.
// forEach의 장점 : length를 알 필요X

// index가 궁금하지 않다면?
persons.forEach(function (item) {
  console.log(item);
});
// 이렇게 원소만 꺼낼 수 있다.

// 3. map을 활용한 배열 순회
// REACT 에서 가장 많이 사용되는 방식!
// 원소를 1개씩 꺼내서 return해줌

console.log(persons);

const mappedPersons = persons.map((x) => x);
console.log("mappedPersons : ", mappedPersons);
// persons와 똑같은 배열이 나온다!
// 이렇게만 하면 map의 장점을 알 수 없다..
// map에 있는 좀 더 특별한 기능에 대해 알아보자!

const mappedPersons2 = persons.map((x) => x * 2);
// persons에 담겨있는 원소들에 2배를 할 수 있다.
console.log("mappedPersons2 : ", mappedPersons2);
// 이때 출력값 : [NaN, NaN, NaN, NaN] 이라고 뜨는 이유?
// 각각의 index 0, 1, 2, 3번째의 값이 상수가 아닌 딕셔너리 형태로 되어있기 때문에 산술연산이 불가능하다.

// 상수로만 구성되어 있는 새로운 배열을 만든 후 다시 map의 장점에 대해 파악해보자.
const sampleArray = [4, 10, 15, 20, 35];
console.log(sampleArray);

const mappedSampleArray = sampleArray.map((x) => 2 * x);
// x 의 값을 2x로 바꿔준다.
// 즉, 모든 원소값을 2배를 해준다는 의미.
console.log("mappedSampleArray : ", mappedSampleArray);
// 원래 배열인 sampleArray의 원소와 비교를 해보면
// 정확히 원소의 값이 2배가 된 것을 확인 가능하다.

// 이렇게 map 함수는 배열의 원소에 대한 산술연산이 가능하다!
// 또한, 사용자가 지정한 함수를 대입하는 것도 가능하다.

const func1 = function (x) {
  return Math.sqrt(x);
};
console.log("출력값 : ", func1(4));
// 이렇게 함수를 만들어 주었다고 치면

const mappedSampleArray2 = sampleArray.map(func1);
console.log(mappedSampleArray2);
// 이렇게 map 안에 함수를 넣어줄수도 있다.
// 이게 바로 map의 장점이다.
