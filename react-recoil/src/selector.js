import { selector } from "recoil";
import { todoListState, todoListFilterState } from "./atom";

export const todoListStatusState = selector({
  key: "todoListStatusState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalComplateNum = todoList.filter((item) => item.isComplete).length;
    const totalUnComplateNum = totalNum - totalComplateNum;
    return {
      totalNum,
      totalComplateNum,
      totalUnComplateNum,
    };
  },
});

export const filterdTodoListState = selector({
  key: "filterdTodoListState",
  get: ({ get }) => {
    const filter = get(todoListFilterState); // filterされた値を取得
    const list = get(todoListState); // 現在のタスク(の配列)を取得

    const filterValue = {
      完了: list.filter((item) => item.isComplete),
      未完了: list.filter((item) => !item.isComplete),
      すべて: list,
    };

    return filterValue[filter];
  },
});
