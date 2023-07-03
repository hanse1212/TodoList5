import { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  // input 입력값
  const [contentI, setContentI] = useState("");
  const inputRef = useRef();

  const [contentC, setContentC] = useState("");
  const inputCRef = useRef();

  // input에 입력할 때마다 호출되는 함수
  const onChangeContentI = (e) => {
    setContentI(e.target.value);  // 입력값으로 content를 업데이트 한다.
  }
  
  const onKeyDownI = (e) => {
    if (e.keyCode === 13) {  // "Enter"
      onSubmit();
    }
  }

  // input에 입력할 때마다 호출되는 함수
  const onChangeContentC = (e) => {
    setContentC(e.target.value);  // 입력값으로 content를 업데이트 한다.
  }

  const onKeyDownC = (e) => {
    if (e.keyCode === 13) {  // "Enter"
      onSubmit();
    }
  }

  // '추가'버튼을 클릭할 때마다 실행되는 함수
  const onSubmit = () => {
    if (!contentI) { // contentI === ""
      inputRef.current.focus();
      return;
    } else if (!contentC) { // contentC === ""
      inputCRef.current.focus();
      return;
    }
    onCreate(contentI, contentC);
    setContentI("");  // input도 비워짐
    setContentC("");  // input도 비워짐
  }

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={contentI}
          onChange={onChangeContentI}
          onKeyDown={onKeyDownI}
          placeholder="새로운 Todo..."
        />
        <input
          ref={inputCRef}
          value={contentC}
          onChange={onChangeContentC}
          onKeyDown={onKeyDownC}
          placeholder="카테고리.."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
}

export default TodoEditor;