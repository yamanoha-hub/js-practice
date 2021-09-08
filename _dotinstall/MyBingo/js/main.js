'use strict';

{
  // i移行の列を作る
  function createColumn(col) {
    const source = [];
    for(let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }
    const column = [];
    for (let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }
    return column;
  }

  // 5列分の配列を作る。
  function createColumns() {
    const columns = [];
    for(let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }

  // 反転とページに反映させる。
  function renderBingo(columns) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }

  const columns = createColumns();
  renderBingo(columns);
}




  // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // Math.floor(Math.random() * (14 + 1))  0~14までのランダムの整数値を求める。
  // Math.floor(Math.random() * source.length)  配列が変わっても式を使うことができる。

  // spliceは一個取り出したら、取り出した数値を選択されない脳にすること。
  // b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];

  // columns[0] = createColumn(0); //Bの列
  // columns[1] = createColumn(1); //Iの列
  // columns[2] = createColumn(2); //Nの列
  // columns[3] = createColumn(3); //Gの列
  // columns[4] = createColumn(4); //Oの列

        // 1 ... 15
      // source[i] = i + 1 + 15 * 0;
      // 16 ... 30
      // source[i] = i + 1 + 15 * 1;
      // 31 ... 45
      // source[i] = i + 1 + 15 * 2;