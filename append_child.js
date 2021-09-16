

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
