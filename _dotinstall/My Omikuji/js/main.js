'use strict';

// Math.random() = 0から1未満を含む。
// Math.random() * 3 = 0から3未満を含む。
// Math.floor(Math.random() * 3) = 0から2を含む。
// Math.floor(Math.random() * (n + 1)) = 0からnを含む。
// min + Math.floor(Math.random() * (max + 1 - min)) = minからmaxを含む。

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const n = Math.random();
    if(n < 0.05) {
      btn.textContent = '大吉'; // 5%
    } else if(n < 0.2) {
      btn.textContent = '中吉'; // 15%
    } else {
      btn.textContent = '凶'; // 80%
    }



    // const results = ['大吉', '中吉', '凶', '末吉'];
    // const results = ['大吉', '大吉', '大吉', '凶'];


    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    // ↑2行分
    // btn.textContent = results[Math.floor(Math.random() * results.length)];



    // switch(n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;
    // }
  });
}
