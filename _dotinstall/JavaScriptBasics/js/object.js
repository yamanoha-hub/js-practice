'use strict';

{
  // const score1 = 80;
  // const score2 = 90;
  // const score3 = 40;
  // ↓まとめ

  const scores = [80, 90, 40, 70];
  // console.log(scores[1]);

  // console.log(`Score:${scores[0]}`);
  // console.log(`Score:${scores[1]}`);
  // console.log(`Score:${scores[2]}`);

  // for (let i = 0; i < 3; i++) {
  for (let i = 0; i < scores.length; i++) {
    console.log(`Scores ${i}: ${scores[i]}`);
  }
}