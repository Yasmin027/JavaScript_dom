【DOMを操作してh1要素の中身を変える】

{
  function update() {
    // document.querySelector('h1').textContent = 'Changed!';  
    // 文書内から特定の要素を取得するquerySelector()/中身のテキストを.textContentに代入して表現

    // document.querySelector('#target').textContent = 'Changed!'; ←id属性
    document.getElementById('target').textContent = 'Changed!'; ←idを指定して要素を探せるgetElementById() ※id名に#不要
  }

  setTimeout(update, 1000);  ←1秒後に書き換える命令
}





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
