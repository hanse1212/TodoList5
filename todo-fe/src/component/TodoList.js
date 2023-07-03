import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  // 검색창에 입력할 때마다 동작하는 함수
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  // 검색어가 있으면 검색어를 포함한 todo 배열을 반환
  // 그렇지 않으면 todo 전체 배열 반환
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((item) =>
        item.contentI.toLowerCase().includes(search.toLowerCase()));  // 대소문자 구분 X
  }

  return (
    <div className="TodoList">
      <spqn>Todo List</spqn>
      <button>asd</button>
      <input
        className="searchbar"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="list_wrapper">
        {getSearchResult().map((item) => (
          <TodoItem
            key={item.id}
            onUpdate={onUpdate}
            onDelete={onDelete}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;