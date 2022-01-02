import React, { useState, useEffect } from "react";
import styles from "./TodoForm.module.css";
import { useDispatch } from "react-redux";
import { addForm } from "../../store/actions";

export default function TodoForm() {
  const [value, setValue] = useState("");
  const [hideBtn, setHideBtn] = useState(false);
  const dispatch = useDispatch();

  const addFormData = (e) => {
    e.preventDefault();
    dispatch(addForm(value))
    setValue("");
  };

  useEffect(() => {
    if (value.length === 15) {
      setHideBtn(true);
    } else {
      setHideBtn(null);
    }
  }, [value, hideBtn]);

  return (
    <form onSubmit={addFormData} className={styles.form}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.inp}
        maxLength="15"
        placeholder="Максимум 15 символів"
      />
      <button className={styles.btn} disabled={hideBtn}>
        Додати
      </button>
    </form>
  );
}
