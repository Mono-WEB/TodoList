import { ADD_FORM_DATA, DELETE_TODO, EDIT_TODO } from "../actions";

export function todoReducer(state = [], action) {
  const data = action.payload;
  switch (action.type) {
    case ADD_FORM_DATA: {
      return [...state, data];
    }
    case DELETE_TODO: {
      return [...state].filter((item) => item.id !== data);
    }
    case EDIT_TODO: {
      let newState = [...state].map((item) => {
        if (item.id === action.payload.id) {
          item.value = action.payload.txt;
          return item;
        } else {
          return item;
        }
      });
      return newState
    }
    default:
      return state;
  }
}
