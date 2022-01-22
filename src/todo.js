const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputTxt = document.getElementById("add-txt").value;
  document.getElementById("add-txt").value = "";

  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.className = "todo__ttl";
  p.innerText = inputTxt;

  // button(完了)
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    alert("削除");
  });

  // liの子要素に書く要素を設定
  li.appendChild(p);
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  // 未完了のTODOのリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-btn")
  .addEventListener("click", () => onClickAdd());
