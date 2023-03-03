import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atom";

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const selectChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <select onChange={selectChange} value={filter}>
      <option value="すべて">すべて</option>
      <option value="完了">完了</option>
      <option value="未完了">未完了</option>
    </select>
  );
};

export default TodoListFilters;
