import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atom";

const TodoItem = ({ id, title }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItem = () => {
    const index = todoList.findIndex((item) => item.id === id);
    const newTodoList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1), //[1,2,3,4,5,6,7] -> [1,2,3]と[5,6,7]をつなぐことで取り除く
    ];
    setTodoList(newTodoList);
  };

  return (
    <div key={id}>
      {id}:{title}
      <button onClick={deleteItem}>削除</button>
    </div>
  );
};

export default TodoItem;
