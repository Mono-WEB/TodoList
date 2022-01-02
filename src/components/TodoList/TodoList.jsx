import React from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector } from "react-redux";
// import { ADD_FORM_DATA } from "../../store/actions";

export default function TodoList() {
  const allTodo = useSelector((state) => state.todoReducer);
  // const dispatch = useDispatch();

  // dispatch({
  //   type: ADD_FORM_DATA,
  //   payload: JSON.parse(todoStorage),
  // });

  return (
    <div>
      <TodoForm />
      <TodoItem todos={allTodo} />
    </div>
  );
}
