【input要素の操作】


'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    //HTMLからinput要素を探してtext変数に入れろと命令↓
    const text = document.querySelector('input');
    li.textContent = text.value;
    //すでにあるulを探して、liを追加しろという命令↓
    document.querySelector('ul').appendChild(li);

    text.value ='';
    text.focus();
  });
}
