// 배열에서 사용 가능한 메소드
// push(object) : 배열 맨 뒤 원소 추가
// pop() : 배열 맨 뒤 원소 삭제, 원소 출력
// unshift(object) : 배열 맨 앞 원소 추가
// shift() : 배열 맨 앞 원소 삭제, 원소 출력

// splice(시작 index, 갯수, [,object]) : 여러 개의 원소 추가 or 삭제
// slice(index, count) : 여러 개의 원소 slicing 해서 새로운 배열 생성
// concat(array) : 원래 배열 + 들어온 배열 -> 합친 배열 출력

// 배열의 원소를 꺼내는 함수를 미리 만들어 놓자.
function showArrayElement(arr) {
  arr.forEach(function (item, index) {
    console.log("%d번째 원소 : %j", index, item);
  });
  console.log("-------------------------------------------");
}

const arr1 = [
  { name: "홍길동", age: 20 },
  { name: "임꺽정", age: 30 },
];

showArrayElement(arr1);

// push(object) : 배열 맨 뒤 원소 추가
arr1.push([{ name: "둘리", age: 10000 }]);
showArrayElement(arr1);

// pop() : 배열 맨 뒤 원소 삭제, 원소 출력
arr1.pop();
showArrayElement(arr1);

// unshift(object) : 배열 맨 앞 원소 추가
arr1.unshift([{ name: "뚱이", age: 3 }]);
showArrayElement(arr1);

// shift() : 배열 맨 앞 원소 삭제, 원소 출력
arr1.shift();
showArrayElement(arr1);

// splice(시작 index, 갯수, [,object]) : 여러 개의 원소 추가 or 삭제
arr1.splice(1, 1, { name: "스펀지밥", age: 4 });
showArrayElement(arr1);
// index 1인 임꺽정 삭제한 후, 스펀지밥 추가
// 홍길동 스펀지밥

arr1.push({ name: "코난", age: 5 });
showArrayElement(arr1);

const arr2 = arr1.slice(0, 2);
console.log(arr2);

const arr3 = arr1.concat(arr2);
console.log(arr3);
