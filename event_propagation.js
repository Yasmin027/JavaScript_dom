【イベントの伝搬】

//Eventオブジェクトを使えばクリックした要素は e.target,
//EventListenerを追加した要素は e.currentTargetで取得できる
'use strict';
{
  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === 'LI') { ←Element.targetNameはタグ名を大文字で返すようになっている
      //doneクラスを付けたり外したりする
      e.target.classList.toggle('done');
    }
  });
}
