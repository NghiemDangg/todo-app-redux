import { useState } from "react";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../../Redux/actions";
import Todo from "../Todo";
import { todosRemainingSelector } from "../../Redux/selector";

export default function TodoList() {
  const [todoName, setTodoName] = useState(""); //lưu lại giá trị của input
  const [priority, setPriority] = useState("Medium");
  const dispatch = useDispatch();

  const todoList = useSelector(todosRemainingSelector);

  const handleAddButtonClick = () => {
    dispatch(
      addTodo({
        id: uuidv4(), //dùng thư viện tạo id độc nhất
        name: todoName,
        priority: priority,
        completed: false, //mac dinh se la false
      })
    );

    setTodoName = "";
    setPriority = "Medium";
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setPriority(value);
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            name={item.name}
            priority={item.priority}
            completed={item.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriorityChange}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
