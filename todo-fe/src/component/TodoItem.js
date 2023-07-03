import "./TodoItem.css";

const TodoItem = ({ id, contentI, contentC, isDone, createdAt, onUpdate, onDelete }) => {
  // 체크박스를 toggle 할 때마다 실행하는 함수
  const onChangeCheckbox = () => {
    onUpdate(id);
  }

  // 삭제 버튼을 클릭할 때 실행하는 함수
  const onClickDelete = () => {
    onDelete(id);
  }

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input
          type="checkbox"
          checked={isDone}
          onChange={onChangeCheckbox}
        />
      </div>
      <div className="title_col">{contentI}</div>
      <div className="cate_col">{contentC}</div>
      <div className="date_col">
        {new Date(createdAt).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
}

export default TodoItem;