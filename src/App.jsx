import TodoList from "./components/TodoList/TodoList";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <TodoList />
    </div>
  );
}

export default App;
