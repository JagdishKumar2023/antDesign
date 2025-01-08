import { Col, Row } from "antd";

const ColAnt = () => {
  return (
    <div>
      <h1>ColAnt</h1>
      <Col>
        <Row>
          <div
            style={{
              margin: "20px",
              background: "red",
              padding: "20px",
              color: "orange",
            }}
          >
            Colunm 1
          </div>
        </Row>
        <Row>
          <div
            style={{
              margin: "20px",
              background: "orange",
              padding: "20px",
              color: "black",
            }}
          >
            Colunm 2
          </div>
        </Row>
        <Row>
          <div
            style={{
              margin: "20px",
              background: "green",
              padding: "20px",
              color: "white",
            }}
          >
            Colunm 3
          </div>
        </Row>
        <Row>
          <div
            style={{
              margin: "20px",
              background: "white",
              padding: "20px",
              color: "black",
            }}
          >
            Colunm 4
          </div>
        </Row>
      </Col>
      <Row>
        <Col>
          <div
            style={{
              margin: "20px",
              background: "green",
              padding: "20px",
              color: "white",
            }}
          >
            Colunm 5
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ColAnt;
