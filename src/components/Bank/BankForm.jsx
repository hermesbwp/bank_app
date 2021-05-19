import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./BankForm.css";

function BankForm() {
  return (
    <Form>
      <div className="box_text">
        <p>Dados do convênio:</p>
      </div>
      <div className="box_border"></div>
      <Row>
        <Col xs lg={3}>
          <Form.Group>
            <Form.Control placeholder="Nome" className="input_box" />
          </Form.Group>
        </Col>
        <Col xs lg={2}>
          <Form.Group>
            <Form.Control placeholder="Agência" className="input_box" />
          </Form.Group>
        </Col>
        <Col xs lg={1}>
          <Form.Group>
            <Form.Control placeholder="DV" className="input_box" />
          </Form.Group>
        </Col>
        <Col xs lg={2}>
          <Form.Group>
            <Form.Control placeholder="Conta" className="input_box" />
          </Form.Group>
        </Col>
        <Col xs lg={1}>
          <Form.Group>
            <Form.Control placeholder="DV" className="input_box" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <Form.Group>
            <Form.Control
              placeholder="Número da Carteira"
              className="input_box"
            />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group>
            <Form.Control placeholder="Convênio" className="input_box" />
          </Form.Group>
        </Col>
      </Row>
      <br />
      <div className="box_text">
        <p>
          Dados do cedente:{" "}
          <span className="box_subTitle">
            (quem emite a cobrança: ou seja, aquele que irá receber a quantia
            cobrada)
          </span>
        </p>
      </div>
      <div className="box_border"></div>
      <Row>
        <Col lg={3}>
          <Form.Group>
            <Form.Control placeholder="Nome" className="input_box" />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group>
            <Form.Control
              placeholder="CPF/CNPJ do cedente"
              className="input_box"
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <Form.Group>
            <Form.Control placeholder="Endereço" className="input_box" />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group>
            <Form.Control placeholder="Complemento" className="input_box" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <Form.Group>
            <Form.Control placeholder="Número" className="input_box" />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group>
            <Form.Control placeholder="Bairro" className="input_box" />
          </Form.Group>
        </Col>
        <Col lg={2}>
          <Form.Group>
            <Form.Control placeholder="CEP" className="input_box" />
          </Form.Group>
        </Col>
        <Col lg={1}>
          <Form.Group>
            <Form.Control placeholder="UF" className="input_box" />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group>
            <Form.Control placeholder="Cidade" className="input_box" />
          </Form.Group>
        </Col>
      </Row>
      <div className="box_btn">
        <Button variant="success">PRÓXIMO</Button>
      </div>
    </Form>
  );
}

export default BankForm;
