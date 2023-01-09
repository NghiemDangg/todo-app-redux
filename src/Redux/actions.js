//action creators ==> function (trong thực tế cta dùng cái này chứ không dùng action kia)
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data, //thông tin mà người dùng đã nhập bên phía UI
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};
export const priorityFilterChange = (priorities) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};
