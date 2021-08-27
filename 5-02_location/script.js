'use strict';

// HTML要素のlang属性の値を代入。
const lang = document.querySelector('html').lang;

// オプションのテキストをページに合わせる。
if(lang === 'ja') {
  document.querySelector('option[value="index.html"]').selected = true;
} else if(lang === 'en') {
  document.querySelector('option[value="index-en.html"]').selected = true;
} else if(lang === 'zn') {
  document.querySelector('option[value="index-zn.html"]').selected = true;
}

// フォームの内容が変わった時イベント発生
document.getElementById('form').select.onchange = function() {
  // Location.hrefは表示しているページのURL = 新しいURL
  // プルダウンメニューの場合は、選択されているoptionのvalue属性を調べるために、その親要素であるselectのvalueプロパティを読み取る。
  location.href = document.getElementById('form').select.value;
}
