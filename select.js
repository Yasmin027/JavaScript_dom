'use strict';

【セレクトボックスの操作】

{
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    const color = document.querySelector('select');
    //selectの場合valueプロパティで選択された値、
    //selectedIndexプロパティで選択された値が何番目かを取得できる↓
    li.textContent = `${color.value} - ${color.selectedIndex}`;
    //それをリストに追加↓
    document.querySelector('ul').appendChild(li);
  });
}
//valueの値にはタグの中身が使われるが、別の値にしたいときは
//HTMLでvalue属性を指定
