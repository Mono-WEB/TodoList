import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./TodoItem.module.css";
import { AiOutlineCloseCircle, AiFillEdit } from "react-icons/ai";
import "../../index";
import { deleteTodo, editTodo } from "../../store/actions";

export default function TodoItem({ todos, updateEdit }) {
  const [editingText, setEditText] = useState("");
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const editinput = (id, value) => {
    setEdit(id);
    setEditText(value);
  };

  const changeInput = (id, txt) => {
    dispatch(editTodo(id, txt));
    setEdit(null);
  };

  const changeEditingText = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div>
      {todos ? (
        todos.map((item, indx) => {
          return (
            <div key={indx} className={styles.wrap}>
              {edit === item.id ? (
                <div>
                  <input
                    type="text"
                    value={editingText}
                    onChange={changeEditingText}
                  />
                </div>
              ) : (
                <div>{item.value}</div>
              )}
              {edit === item.id ? (
                <button onClick={() => changeInput(item.id, editingText)}>
                  Зберегти
                </button>
              ) : (
                <div className={styles.icons}>
                  <AiOutlineCloseCircle
                    onClick={() => dispatch(deleteTodo(item.id))}
                    className={styles.icon__close}
                  />
                  <AiFillEdit
                    onClick={() => editinput(item.id, item.value)}
                    className={styles.icon__edit}
                  />
                  <input type="checkbox" className={styles.checkbox} />
                </div>
              )}
            </div>
          );
        })
      ) : (
        <div>---</div>
      )}
    </div>
  );
}
