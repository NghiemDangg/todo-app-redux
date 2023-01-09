const initState = [
  {
    id: 1,
    name: "Learn Redux",
    completed: false,
    priority: "High",
  },
  {
    id: 2,
    name: "Learn API",
    completed: false,
    priority: "Medium",
  },
  {
    id: 3,
    name: "Learn TS",
    completed: true,
    priority: "Medium",
  },
];

const todoListReducer = (state = initState, action) => {
  /**action là 1 obj
   * {
   * type: 'todoList/addTodo',
   * payload: {id:2,name:"learn footbal",completed:false} /thông tin của action
   * }
   */
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default: {
      return state;
    }
  }
};

export default todoListReducer;
