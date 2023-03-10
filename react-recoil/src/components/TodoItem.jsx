import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atom";

const TodoItem = ({ id, title, isComplete }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItem = () => {
    console.time("timer1");
    for (let index = 0; index < 10; index++) {
      const newState = todoList.filter((item) => item.id !== id);
      setTodoList(newState);
    }
    console.timeEnd("timer1");
  };

  const deleteItem2 = () => {
    console.time("timer1");
    for (let index = 0; index < 10; index++) {
      const index = todoList.findIndex((item) => item.id === id);
      //[1,2,3,4,5,6,7] ->  [1,2,3]と[5,6,7]を繋ぐことで4を取り除く
      const newTodoList = [
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1),
      ];
      setTodoList(newTodoList);
    }
    console.timeEnd("timer1");
  };

  function hoge() {}

  const hoge1 = hoge();
  const hoge2 = hoge();

  console.log(hoge1 === hoge2);
  console.log(222222);

  const toggleItemComp = () => {
    const index = todoList.findIndex((listItem) => listItem.id === id);
    const newItem = { id, title, isComplete: !isComplete };
    const newTodoList = [
      ...todoList.slice(0, index),
      { ...newItem },
      ...todoList.slice(index + 1),
    ];
    setTodoList(newTodoList);
  };

  return (
    <div key={id}>
      <button onClick={toggleItemComp}>{isComplete ? "完" : "未"}</button>
      {id}:{title}
      <button onClick={deleteItem}>削除 deleteItem</button>
      <button onClick={deleteItem2}>削除 deleteItem2</button>
    </div>
  );
};

export default TodoItem;
