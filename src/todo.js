// 追加ボタンが押された時の動作
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputTxt = document.getElementById("add-txt").value;
  document.getElementById("add-txt").value = "";

  createIncompleteList(inputTxt);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 完了リストから指定の要素を削除
const deleteFromCompleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // li生成
  const li = document.createElement("li");
  li.className = "list-row";

  // p生成
  const p = document.createElement("p");
  p.className = "todo__ttl";
  p.innerText = text;

  // button(完了)
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeBtn.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeBtn.parentNode;

    // TODOのタイトルを取得
    const todoTitle = addTarget.firstElementChild.innerText;

    // li以下を初期化
    addTarget.textContent = null;

    // pタグ生成
    const p = document.createElement("p");
    p.className = "todo__ttl";
    p.innerText = todoTitle;

    // buttonタグ生成
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(li)を完了リストから削除
      deleteFromCompleteList(backBtn.parentNode);

      // TODOのタイトルを取得
      const todoBackTitle = backBtn.parentNode.firstElementChild.innerText;

      createIncompleteList(todoBackTitle);
    });

    // liタグの子要素に各要素を設定
    addTarget.appendChild(p);
    addTarget.appendChild(backBtn);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(削除)
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteBtn.parentNode);
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
