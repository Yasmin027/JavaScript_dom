【要素の属性の操作】

{
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target')

    targetNode.textContent = 'Changed!';
    targetNode.title = 'This is title!'; 
    //DOMにはいくつかの例外を除き、属性と同名のプロパティが用意されている（上はtitle属性)
    targetNode.style.color = 'red'; ←スタイル属性
    targetNode.style.backgroundColor = 'skyblue'; ←ハイフンは付けずハイフン後の一文字目を大文字にする
  });
}


