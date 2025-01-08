import { Row, Col } from "antd";

const ResponsiveGrid = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <div style={{ background: "#1890ff", padding: "20px", color: "white" }}>
          1
        </div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <div style={{ background: "#ff7a45", padding: "20px", color: "white" }}>
          2
        </div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <div style={{ background: "#ffc53d", padding: "20px", color: "white" }}>
          3
        </div>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <div style={{ background: "#73d13d", padding: "20px", color: "white" }}>
          4
        </div>
      </Col>
    </Row>
  );
};

export default ResponsiveGrid;
