【チェックボックスの操作】


'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
  const colors = document.querySelectorAll('input');
  //↓配列の内容は変わるが、のちに全体が再代入されることはないためconstで宣言
  const selectedColors = [];

  colors.forEach(color => {
    if (color.checked === true) {
      //↓selectedColorsに選択された値を追加するpushメソッド
      selectedColors.push(color.value);
    }
  });

  const li = document.createElement('li');
  li.textContent = selectedColors//.join(','); ←配列の要素をカンマ区切りに設定 BUT 配列は文字列で表現される際はカンマ区切りになるので、この時join()は省略可能
  document.querySelector('ul').appendChild(li);
});

}
