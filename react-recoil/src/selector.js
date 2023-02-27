import { selector } from "recoil";
import { todoListState } from "./atom";

export const todoListStatusState = selector({
  key: "todoListStatusState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    return totalNum;
  },
});
