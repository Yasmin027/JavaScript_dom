






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
