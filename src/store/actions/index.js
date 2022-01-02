export const ADD_FORM_DATA = "ADD_FORM_DATA";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export function addForm(value) {
  return {
    type: ADD_FORM_DATA,
    payload: {
      value: value,
      id: Math.floor(Math.random() * 10000),
      completed: false,
    },
  };
}

export function editTodo(id, txt) {
  return {
    type: EDIT_TODO,
    payload: {
      id: id,
      txt: txt,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}
