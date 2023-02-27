import { useRecoilValue } from "recoil";
import { todoListStatusState } from "../selector";

import React from "react";

function TodoListStats() {
  const totalNum = useRecoilValue(todoListStatusState);
  return (
    <ul>
      <li>Todoの登録数 : {totalNum}</li>
    </ul>
  );
}

export default TodoListStats;
