import { Form, Input, Button, Row, Col } from "antd";

const ResponsiveForm = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please enter your first name" },
            ]}
          >
            <Input placeholder="Enter your first name" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please enter your last name" }]}
          >
            <Input placeholder="Enter your last name" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12}>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number" },
              {
                pattern: /^\d+$/,
                message: "Please enter a valid phone number",
              },
            ]}
          >
            <Input placeholder="Enter your phone number" />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ResponsiveForm;
