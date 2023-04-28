// 문자열 선언
var greeting = "Hello!";
var farewell = 'Bye!';
var myname = '김테킷';

var sentence = greeting + myname; // 공백없이 합쳐짐
// console.log(sentence);

// console.log(farewell + 2);  // 2가 문자열로 변환



// 이스케이프 시퀀스
// var sentence = greeting + '\t' + myname;
// var sentence = greeting + '\'' + myname;
// var sentence = greeting + '\n' + myname;
// console.log(sentence);


// 템플릿 리터럴 (멀티라인 텍스트 작업 가능, 이스케이프 시퀀스 필요X)
// var a = `안녕하세요!`

// var a = `안녕하세요!
// 여러분:)`

// console.log(a);

// var price = 1000;
// var b = '이 물건은 ' + price + '원 입니다.'
// console.log(b);

// var c = `이 물건은 ${price}원 입니다.`
// console.log(c);

// var d = `이 물건은 ${200+450}원 입니다.`
// console.log(d);

// 문자열 함수

var abc = "I am Iron man";

// // indexof
// // 문자열의 특정 값이 시작되는 위치
// console.log(abc.indexOf("man"));
// console.log(abc.indexOf("I"));

// // slice
// console.log(abc.slice(0, 4));  // 끝나는 숫자는 포함하지 않음



// toUpperCase(), toLowerCase()
console.log(abc.toUpperCase());
console.log(abc.toLowerCase());



//startsWith(), endsWuth()
var efg = "This is my car.";
console.log(efg.startsWith('Thi'));  // 처음 시작하나

console.log(efg.endsWith('car.'));  // 끝나는 단어에 해당하나


// includes()
console.log(efg.includes('is'));   // 단어에 포함하나