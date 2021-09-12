'use strict';

{
  // const score1 = 80;
  // const score2 = 90;
  // const score3 = 40;
  // ↓まとめ

  // const otherScores = [10, 20];
  // const scores = [80, 90, 40, 70, ...otherScores];
  // console.log(scores[1]);
  // scores.push(60,50); // 末尾に追加
  // scores.shift(); // 先頭のデータを削除
  // [90, 40, 70, 60, 50]になる

  // splice(変化が開始する位置, 削除数(無いなら0), 追加する要素)
  // scores.splice(1, 1, 40, 50);





  // console.log(`Score:${scores[0]}`);
  // console.log(`Score:${scores[1]}`);
  // console.log(`Score:${scores[2]}`);

  // for (let i = 0; i < 3; i++) {
  // for (let i = 0; i < scores.length; i++) {
    // console.log(`Scores ${i}: ${scores[i]}`);
  // }

  // #06 スプレッド構文を使ってみよう
  // const otherScores = [10, 20];
  // const scores = [80, 90, 40, 70, ...otherScores];
  // console.log(scores);

  // function sum(a, b) {
  //   console.log(a + b);
  // }

  // sum(...otherScores); // sum(10, 20);と同じ

  // #07 分割代入を使ってみよう
  // const scores = [80, 90, 40, 70];

  // const [a, b, c, d] = scores;
  // console.log(a);
  // console.log(b);
  // console.log(c);
  // console.log(d);

  // 配列で出したい
  // const [a, b, ...others] = scores;
  // console,log(a);
  // console,log(b);
  // console,log(others);

  // 値の交換
  // let x = 30;
  // let y = 70;
  // [x, y] = [y, x];
  // console.log(x);
  // console.log(y);


  // #08 forEach()を使ってみよう
  // const scores = [80, 90, 40, 70];

  // scores.forEach((score) => {
  // scores.forEach((score, index) => {
    // console.log(`Score ${index}: ${score}`);
  // });


  // #09 map()を使ってみよう
  // const prices = [180, 190, 200];

  // const updatePrices = prices.map((price) => {
  //   return price + 20;
  // });
  // ↓短くかける
  // const updatePrices = prices.map(price => price + 20);
  // console.log(updatePrices);


  // #10 filter()を使ってみよう
  // const numbers = [1, 4, 7, 8, 10];

  // const evenNumbers = numbers.filter((number) => {
  //   if(number % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // ↓短くかける
  // const evenNumbers = numbers.filter(number => number % 2 === 0);

  // console.log(evenNumbers);


  // #11 オブジェクトを作ってみよう
  // const point = [100, 180];

  // const point = {
  //   x: 100,
  //   y: 180,
  // };
  
  // console.log(point);


  // #12 プロパティを操作してみよう

  // const point = {
  //   x: 100,
  //   y: 180,
  // };

  // 新しい値を変更する方法
  // point.x = 120;
  // point['x'] = 120;
  
  // console.log(point.x);
  // console.log(point['y']);

  // 値を追加したい(z座標を追加したい)
  // point.z = 90;
  // delete point.y;

  // console.log(point);


  // #13 オブジェクトを操作してみよう

  const otherProps = {
    r: 4,
    color: 'red',
  }
  const point = {
    x: 100,
    y: 180,
    ...otherProps,
  };
  // console.log(point);

  const {x, r, ...others} = point;
  console.log(x)
  console.log(r)
  console.log(others)

  // #14 Object.keys()を使ってみよう
  // #15 変数を代入してみよう
  // #16 変数の挙動を理解しよう
  // #17 文字列を操作してみよう
  // #18 join()､split()を使ってみよう
  // #19 数値を操作してみよう
  // #20 ランダムな整数値を作ってみよう
  // #21 現在日時を扱ってみよう
  // #22 特定の日時を扱ってみよう
  // #23 alert()､confirm()を使ってみよう
  // #24 setInterval()を使ってみよう
  // #25 setTimeout()を使ってみよう
  // #26 タイマー処理の違いを理解しよう
  // #27 例外処理を使ってみよう
  // #28 オブジェクトが複数ある場合を考えよう
  // #29 メソッドを使ってみよう
  // #30 クラスの概念を理解しよう
  // #31 クラスを作ってみよう
  // #32 カプセル化を理解しよう
  // #33 静的メソッドを使ってみよう
  // #34 クラスを拡張したい場合を考えよう
  // #35 クラスを継承してみよう


}
