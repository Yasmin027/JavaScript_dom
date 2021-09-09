// テキストボックスとボタンを配置、
// ボタンをクリックしたら、
// name属性が’result’の要素を取得して、その入力内容（テキスト）をコンソール表示する。

function showElements() {
  let elements = document.getElementsByName('result'); 
  console.log(elements[0].value);
}       //elementsは配列で一番目（0）を取得
