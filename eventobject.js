【イベントオブジェクト】
'use strict';

//引数eにはイベントに応じたオブジェクトが渡される
//イベントの追加機能や情報を提供する目的でイベントハンドラーに自動的に渡される

//ダブルクリックするとイベントが起きる
{
  document.querySelector('button').addEventListener('dblclick', () => {
    console.log('Double Dlicked!');
  });

  //マウスを動かすとイベントが起きる
  document.addEventListener('mousemove', () => {
    console.log('moved!');
  });

  //マウスカーソルの座標を取得
  document.addEventListener('mousemove', e => {  //←引数を渡す
    //ここで渡される引数：イベントオブジェクト（慣習的にeventのeがよく使われる）
    console.log(e.clientX, e.clientY);
  });

  //キーを押したとき何のキーが押されたかを表示
  document.addEventListener('keydown', e => {  
    console.log(e.key); //←eは押したキーの情報+aで.keyでキーを押したキーの情報のみを摘出するイメージ
  });
}
  

プロパティ：名前（文字列）と値（プリミティブ（メソッドを持たないデータ）、メソッド、オブジェクト参照（オブジェクトへのリンク）のいずれかを持つ
名前（key）と値（value）が対になったもので、オブジェクトを知るための情報みたいなもの

class：属性（プロパティ）と操作（メソッド）を定義したもの

インスタンス：クラスをnewしたもの（実体）

オブジェクト：クラスとかインスタンスとかのこと（現実世界には存在せずにモデル上のみに存在する何者かをふんわり表現したもの）
または、データとそのデータをやり取りするための命令が入ってデータ構造



'use strict';
{
  const text = document.querySelector('textarea');

  //フォーカスが当たった時のイベント
  text.addEventListener('focus', () => {
    console.log('focus');
  });

  //フォーカスが外れた時のイベント
  text.addEventListener('blur', () => {
    console.log('blur');
  });

  //内容が更新された時のイベント
  text.addEventListener('input', () => {
    console.log('input');
  });
  //入力された文字数を表示
  text.addEventListener('input', () => {
    console.log(text.value.length);
  });

  //更新が確定された時のイベント
  text.addEventListener('change', () => {
    console.log('change');
  });

  
  【フォーム送信イベント】

'use strict';
{
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault(); //←ページ移動（遷移）が発生しページがリロードしてしまわないようにEventオブジェクトを引数に渡して、既定の動作をキャンセルすることができるpreventDefault()というメソッドを実行
    console.log('submit');
  });
}
//formタグを使うことで、ボタンをクリックせずともEnterキーでフォームを送信できる
//↑を実行するにはformタグの中にbuttonタグが必要だが、formタグの中に<input type="text">が一つだけの場合はbuttonタグを省略できる
