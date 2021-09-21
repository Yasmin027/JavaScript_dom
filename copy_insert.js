【要素のコピーと挿入】

{
  document.querySelector('button').addEventListener('click', () => {
    //item0の要素を取得
    const item0 = document.querySelectorAll('li')[0];
    //item0の要素を複製 ※(false)にすると要素の中身を複製しないことになる
    const copy = item0.cloneNode(true);

    //親要素ulを取得
    const ul = document.querySelector('ul');
    //リストの子要素item2を取得
    const item2 = document.querySelectorAll('li')[2];
    //copyをitm2の前に挿入させる
    ul.insertBefore(copy, item2);
  });
}
