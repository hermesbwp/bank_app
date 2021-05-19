import React from "react";
import { Row, Col } from "react-bootstrap";
import "./index.css";

function Number(props) {
  return (
    <div>
      <Row>
        <Col>
          <div className="content" id={props.page === 1 ? "moment" : "pass"}>
            <span className="number_">1</span>
            <span className="text_">Inicio</span>
          </div>
        </Col>
        <Col>
          <div
            className="content"
            id={props.page === 2 ? "moment" : props.page > 2 ? "pass" : ""}
          >
            <span className="number_">2</span>
            <span className="text_">Dados</span>
          </div>
        </Col>
        <Col>
          <div
            className="content"
            id={props.page === 3 ? "moment" : props.page > 3 ? "pass" : ""}
          >
            <span className="number_">3</span>
            <span className="text_">Boleto</span>
          </div>
        </Col>
        <Col>
          <div
            className="content"
            id={props.page === 4 ? "moment" : props.page > 4 ? "pass" : ""}
          >
            <span className="number_">4</span>
            <span className="text_">Retorno</span>
          </div>
        </Col>
        <Col>
          <div className="content" id={props.page === 5 ? "moment" : ""}>
            <span className="number_">5</span>
            <span className="text_">Fim</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Number;
