var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var TodoApp = function TodoApp() {
  var _React$useState = React.useState(""),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      todoTitle = _React$useState2[0],
      setTodoTitle = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      todoItems = _React$useState4[0],
      setTodoItems = _React$useState4[1];

  function onNewTodoTitleChange(e) {
    setTodoTitle(e.target.value);
  }

  function onNewTodo() {
    var newTodoItems = [].concat(_toConsumableArray(todoItems), [{
      title: todoTitle,
      isDone: false
    }]);
    setTodoItems(newTodoItems);
    setTodoTitle("");
  }

  function onCheckTodo(event, indexItem) {
    var newTodoItems = [].concat(_toConsumableArray(todoItems));
    newTodoItems[indexItem].isDone = event.target.checked;
    setTodoItems(newTodoItems);
  }

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "h3",
      null,
      "Add Item"
    ),
    React.createElement(
      "div",
      { className: "new-item" },
      React.createElement("input", { type: "text", value: todoTitle, onChange: onNewTodoTitleChange }),
      React.createElement(
        "button",
        { onClick: onNewTodo },
        "Add"
      )
    ),
    React.createElement(
      "h3",
      null,
      "Todo"
    ),
    React.createElement(
      "ul",
      { className: "list-item" },
      todoItems.map(function (todo, i) {
        return React.createElement(
          "li",
          { key: i, className: "" + (todo.isDone ? "done" : "") },
          React.createElement("input", {
            type: "checkbox",
            onChange: function onChange(e) {
              onCheckTodo(e, i);
            }
          }),
          React.createElement(
            "label",
            null,
            todo.title
          )
        );
      })
    )
  );
};

var domContainer = document.querySelector("#todo-app");
ReactDOM.render(React.createElement(TodoApp), domContainer);