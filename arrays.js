/*
배열(Array)
- 복수의 데이터를 순서대로 담고 있는 자료구조
- 배열의 순서는 0부터 시작
- 배열은 객체!
- 키 => 인덱스, 값 => 요소
*/

// var mbti = ['INFP', 'ENFJ', 'INTJ'];
// console.log(mbti[0]);
// console.log(mbti.length);

// mbti[3] = 'ISFJ'
// console.log(mbti[3]);
// console.log(mbti.length);

// mbti[2] = 'ISTJ'
// console.log(mbti[2]);
// console.log(mbti.length);



// push()
// console.log(mbti.push('ESFP', 'ISTJ'));
// console.log(mbti[4]);


// 스프레드 문법
// var newMbti = [...mbti, 'ESFP', 'ISTJ']
// console.log(mbti);
// console.log(newMbti);


// pop() (맨 뒤쪽 요소 삭제)
// console.log(mbti.pop());
// console.log(mbti);



// unshift()
// console.log(mbti.unshift('ESFP', 'ISTJ'));  // 앞쪽에 요소 추가
// console.log(mbti);

// 스프레드 문법
// var newMbti = ['ESFP', 'ISTJ', ...mbti]
// console.log(mbti);
// console.log(newMbti);


// shift (맨 앞의 요소 삭제)
// console.log(mbti.shift());
// console.log(mbti);


var mbti = ['INFP', 'ENFJ', 'INTJ'];
// slice()
// console.log(mbti.slice(0, 2));
// console.log(mbti.slice());

// console.log(mbti.slice(-1));  // 끝에서부터 1번째





// join() (문자열로 변환)
// console.log(mbti.join());  // ,로 구분
// console.log(mbti.join('-'));  // -로 구분
// console.log(mbti.join(''));




// sort()
console.log(mbti.sort());  // 오름차순 정렬

// reverse()
console.log(mbti.reverse()); // 내림차순 정렬