const TodoApp = () => {
  const [todoTitle, setTodoTitle] = React.useState("");
  const [todoItems, setTodoItems] = React.useState([]);

  function onNewTodoTitleChange(e) {
    setTodoTitle(e.target.value);
  }

  function onNewTodo() {
    const newTodoItems = [
      ...todoItems,
      {
        title: todoTitle,
        isDone: false,
      },
    ];
    setTodoItems(newTodoItems);
    setTodoTitle("");
  }

  function onCheckTodo(event, indexItem) {
    const newTodoItems = [...todoItems];
    newTodoItems[indexItem].isDone = event.target.checked;
    setTodoItems(newTodoItems);
  }

  return (
    <div className="container">
      <h3>Add Item</h3>
      <div className="new-item">
        <input type="text" value={todoTitle} onChange={onNewTodoTitleChange} />
        <button onClick={onNewTodo}>Add</button>
      </div>

      <h3>Todo</h3>
      <ul className="list-item">
        {todoItems.map((todo, i) => (
          <li key={i} className={`${todo.isDone ? "done" : ""}`}>
            <input
              type="checkbox"
              onChange={(e) => {
                onCheckTodo(e, i);
              }}
            ></input>
            <label>{todo.title}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const domContainer = document.querySelector("#todo-app");
ReactDOM.render(<TodoApp />, domContainer);
