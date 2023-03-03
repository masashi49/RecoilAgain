import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "../atom";
import { filterdTodoListState } from "../selector";
import { getId } from "../lib/getId";
import TodoListStats from "./TodoListStats";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";

const TodoList = () => {
  const todoList = useRecoilValue(filterdTodoListState);
  const [, setTodoList] = useRecoilState(todoListState);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title: title,
        isComplete: false,
      },
    ]);
    setTitle("");
  };

  return (
    <div>
      <h1>RecoilによるTODOアプリ</h1>
      <TodoListStats />
      <TodoListFilters />
      <div>
        <input type="text" value={title} onChange={handleChange} />
        <button onClick={addItem}>Add</button>
      </div>
      {todoList?.map((item) => (
        <div key={item.id}>
          <TodoItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
