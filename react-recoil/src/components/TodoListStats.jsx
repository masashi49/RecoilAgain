import { useRecoilValue } from "recoil";
import { todoListStatusState } from "../selector";

import React from "react";

function TodoListStats() {
  const { totalNum, totalComplateNum, totalUnComplateNum } =
    useRecoilValue(todoListStatusState);
  return (
    <ul>
      <li>Todoの登録数 : {totalNum}</li>
      <li>Todoの完了数 : {totalComplateNum}</li>
      <li>Todoの未完了数 : {totalUnComplateNum}</li>
    </ul>
  );
}

export default TodoListStats;
