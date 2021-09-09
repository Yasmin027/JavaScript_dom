// IDをキーに要素を取得
// getElementByIdメソッド

// 現在のid:resultの内容（テキスト）をコンソールに表示。
// id:resultの内容（テキスト）を、現在時刻（日時）に書き換え。

function show() {
  let result = document.getElementById('result');
  console.log(result.innerText);
  let nowDate = new Date();
  result.innerText = nowDate.toLocaleString();
};
