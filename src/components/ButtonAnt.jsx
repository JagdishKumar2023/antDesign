import { Button, Flex } from "antd";
import { Row, Col } from "antd";

const ButtonAnt = () => (
  <Flex gap="small" wrap>
    <Button type="primary">Primary Button</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>

    <Button type="text">Text button</Button>

    <Row gutter={16}>
      <Col span={12}>Column 1</Col>
      <Col span={12}>Column 2</Col>
    </Row>
  </Flex>
);

export default ButtonAnt;
