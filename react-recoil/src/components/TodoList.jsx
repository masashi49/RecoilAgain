import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "../atom";
import { filterdTodoListState } from "../selector";
import { getId } from "../lib/getId";
import TodoListStats from "./TodoListStats";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import Kirby from "./kirby/Kirby";

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
      <button onClick={addItem}>Add</button>
      <h1 className="m-4 text-3xl font-bold underline">Hello world!</h1>
      <Kirby />
      <h2>RecoilによるTODOアプリ</h2>
      <TodoListStats />
      <TodoListFilters />
      <div>
        <input type="text" value={title} onChange={handleChange} />
      </div>
      {todoList?.map((item) => (
        <div key={item.id}>
          <TodoItem {...item} />
        </div>
      ))}
      あいうえお
    </div>
  );
};

export default TodoList;
