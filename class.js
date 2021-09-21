

【class属性の操作】

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    targetNode.className = 'my-color';  ←.classNameにclas名を代入
  });
}

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    targetNode.className = 'my-color my-border';
    // 他のクラスがすでについていた際（この時はmy-border）は↑のように
    // 二つ並べて書かないとクラス属性の値が丸ごと書き換わってしまう
  });
}
       ↓さらに簡易的に書く方法（classList）

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    targetNode.classList.add('my-color');
    //.classList.addを使えば既存のクラスの設定を記載せずとも、値が更新されることなく、ただ新しいクラスを追加してくれる
  });
}

ある要素に特定のクラスが付いているかどうかを調べる
（.classList.contains()）

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    targetNode.classList.contains('my-color'); 
    //クラスが付いているかはtrue/falseで返される
  });
}
        ↓それを応用し、付いていれば外し付いていなければ付ける設定にする
        （ボタンを押すと装飾が付き、また押すと外れる）

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    // if (targetNode.classList.contains('my-color') === true) {
    //   targetNode.classList.remove('my-color');
    // } else {
    //   targetNode.classList.add('my-color');
    // }
    targetNode.classList.toggle('mycolor');
    //toggle：ある同じ操作を繰り返すこと・機能や状態のON/OFFを切り替える仕組みのこと
  });
}



【カスタムデータ属性】
HTMLのh1の要素（日本語テキスト）とJSの要素（英語テキスト）を一緒に管理する
→HTMLのh1にdata-から始まる独自の属性を作る
（この時data-translation = "Dotinstall"）

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');

    // targetNode.textContent = "Dotinstall";
    targetNode.textContent = targetNode.dataset.translation;
    //クラス属性とカスタムデータ属性だけは例外的に違う書き方↑
  });
}
