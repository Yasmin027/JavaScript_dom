
【要素の追加】
（リストの末尾にitem2という子要素リストを追加）
{
  document.querySelector('button').addEventListener('click', () => {
    //①li要素を作る(.cleateElement)
    const item2 = document.createElement('li');
    //➁要素の中のテキストを作る
    item2.textContent = 'item 2';

    //③親要素であるul要素を取得
    const ul =document.querySelector('ul');
    //④ulの子要素の末尾にitem2を追加(.appendChild())
    ul.appendChild(item2)
  });
}






【DOMツリーの階層関係から要素を取得する】

eg.
<ul>
  <li>item</li>
  <li>item</li>
  <li>item</li>
</ul>
※要素Node以外にも空白や改行を表すテキストNodeもある

ulの子Nodeを取得したいとき
→ul.childNode （改行を表すテキストNode含む全ての子Node）

テキストNodeを無視して要素Nodeだけを取得したいとき
→ul.children

最初と最後の子Nodeを取得したいとき（上の場合だと最初と最後の改行部分のテキストNode）
→ul.firstChild
→ul.lastChild

最初と最後の要素Nodeだけを取得したいとき
→firstElementChild
→lastElementChild

li要素から見て親Nodeを取得したいとき
→li.parentNode

兄弟Nodeを取得したいとき 
一つ前の兄弟Node → previousSibling
一つ後の兄弟Node → nextSibling
要素だけの場合 (上の場合 liから見るとひとつ前/後のli要素)
→previousElementSibling
→nextElementSibling







// 空のリスト、ボタンを配置
// ボタンをクリックすると、
// リストの項目が追加される。
// 追加される文字列は”追加文字列”とする。
function append() {
  // li要素を生成
  let li = document.createElement('li');
  // テキストノードを生成
  let text = document.createTextNode('追加文字列')
  // liタグの要素に、テキストノード textを追加
  li.appendChild(text);
  // idがlistsのulタグに、liを追加。具体的には<li>追加文字列</li>が、追加される。
  lists.appendChild(li);
}

// ノード(Node): 各要素（HTMLのエレメント、タグ)自体。
// 上はparentnode,
// 下はchildrennode。
