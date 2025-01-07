import { Input, Form, Button } from "antd";
import { useState } from "react";

const FormSignup = () => {
  const [inputValues, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValues, [name]: value });
  };

  const handleSubmit = () => {
    setInputValue({ name: "", email: "", password: "" });
  };

  console.log(inputValues);

  return (
    <div>
      <h1>Basic Form</h1>
      <Form onFinish={handleSubmit} layout="vertical">
        <Form.Item label="Name" name="name" style={{ color: "white" }}>
          <Input
            name="name"
            onChange={handleChange}
            value={inputValues.name}
            placeholder="Enter your name"
          />
        </Form.Item>
        <Form.Item label="Email" name="email" style={{ color: "white" }}>
          <Input
            name="email"
            value={inputValues.email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item label="Password" name="password" style={{ color: "white" }}>
          <Input
            name="password"
            value={inputValues.password}
            placeholder="Enter  password"
            onChange={handleChange}
            type="password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormSignup;
