// 演習
function append() {
  let textBox = document.getElementById('textBox');
  let li = document.createElement('li');
  let text = document.createTextNode(textBox.value);
  li.appendChild(text);
  let lists = document.getElementById('lists');
  lists.appendChild(li);
}
