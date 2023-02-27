import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../atom";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  //const [todoList2, setTodoList] = useRecoilState(todoListState);
  console.log(todoList);
  //console.log(todoList2);
  return (
    <div>
      <h1>RecoilによるTODOアプリ</h1>
      <TodoListStats />
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default TodoList;
