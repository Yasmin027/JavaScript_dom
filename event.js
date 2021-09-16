'use strict';

【インタラクティブな操作】

・イベントを付けたい要素.addEventListener()
  ()内にイベントを起こす動作（この時はclick）とイベント（実行したい処理）を書く

{
  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('target').textContent = 'Changed!';
  });
}
