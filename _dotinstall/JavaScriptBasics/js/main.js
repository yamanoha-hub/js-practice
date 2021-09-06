  'use strict';
  
  // const score = 85;
  // if(score >= 80) {
  //   console.log('Great!');
  // } else if (score >= 60) {
  //   console.log('Good!');
  // } else {
  //   console.log('OK...');
  // }
  // score >= 80 ? console.log('Great!') : console.log('OK...');


  // const score = 60;
  // const name = 'taguchi';
  // if(score >= 50) {
  //   if(name === 'taguchi') {
  //     console.log('Good job!')
  //   }
  // }
  // && なおかつ(AND)
  // || もしくは(OR)
  // ! ~ではない(NOT)
  // 論理演算子
  // if(score >= 50 && name === 'taguchi') {
  //   console.log('Good job!');
  // }

  // switch文
  // const signal = 'pink';
  // if(signal === 'red') {
  //   console.log('Stop!');
  // } else if(signal === 'yellow') {
  //   console.log('Caution!');
  // } else if (signal === 'blue') {
  //   console.log('Go!');
  // }
  // switch (signal) {
  //   case 'red':
  //     console.log('Stop!');
  //     break;
  //   case 'yellow':
  //     console.log('Caution!');
  //     break;
  //   case 'blue':
  //   case 'green':
  //     console.log('Go!');
  //     break;
  //   default:
  //     console.log('Wrong signal!')
  // }

  // for (let i = 1; i <= 10; i++) {
  //   // console.log('hellow');
  //   // console.log('hellow' + i);
  //   console.log(`hellow ${i}`);
  // }

  // let hp = 100;
  // while(hp > 0) {
  //   console.log(`${hp} HP left!`);
  //   hp -= 15;
  // }

  // let hp = -50;
  // do {
  //   console.log(`${hp} HP left!`);
  //   hp -= 15;
  // } while(hp > 0);

  // for(let i = 1; i <= 10; i++) {
    // if(i === 4) {
    // if(i % 3 === 0) {
      // continue; // ループをスキップ
    // }
  //   if(i === 4) {
  //     break;
  //   }
  //   console.log(i);
  // }

  // function showAd(message = 'Ad') {  // 仮引数
    // console.log('--------------');
    // console.log(`------${message}-----`);
    // console.log('--------------');
  // }
  // showAd('Header Ad');  // 実引数
  // console.log('Tom is great!');
  // console.log('Bob is great!');
  // showAd('Ad');
  // showAd();
  // console.log('Steve is great!');
  // console.log('Richard is great!');
  // showAd('Footer Ad');

// function sum(a, b, c) {
  // console.log(a + b+ c);
//   return a + b + c;
// }
// sum(1, 2, 3);
// sum(3, 4, 5);
// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// const sum = function(a, b, c) {
//   return a + b + c;
// }
// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// アロー関数
// const sum = (a, b, c) => a + b + c;
// const total = sum(1, 2, 3) + sum(3, 4, 5);
// console.log(total);

// const double = function(a) {
//   return a * 2;
// };
// const double = a => a * 2;
// console.log(double(12));

// スコープ
// const x = 2;
// function f() {
  // const x = 1;
  // console.log(x);
// }
// f();
// console.log(x);

{
const x = 100;
console.log(x);
}
