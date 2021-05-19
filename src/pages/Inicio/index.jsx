import React, { useState, useEffect } from "react";
import Number from "../../components/Number";
import { Row, Col, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "./index.css";

// import { Container } from './styles';

function Inicio() {
  const [perg2, setPerg2] = useState(false);
  const [perg3, setPerg3] = useState(false);

  const handleCheckedFrist = () => {
    setPerg2(true);
  };
  const handleCheckedSecond = () => {
    setPerg3(true);
  };
  const handleFalse = () => {
    toast.error(
      "Entre em contato com seu banco e solicite o seu convênio de emissão de boletos SEM REGISTRO. Verifique com o seu gerente."
    );
  };
  useEffect(() => {}, [perg2]);
  useEffect(() => {}, [perg3]);

  return (
    <div>
      <Number page={1} />
      <div>
        <Form.Group>
          <Row>
            <Col lg={9}>
              <Form.Label className="box_form">
                Você possui um convênio para emissão de boletos junto ao seu
                banco?
              </Form.Label>
              <div className="box_border"></div>
            </Col>
            <Col>
              <div className="help">
                <p>
                  Não sei o que é<span className="question_mark">?</span>
                </p>
              </div>
            </Col>
          </Row>
          <Form.Check
            type="radio"
            label="Sim"
            id="radio-1"
            name="group1"
            onChange={handleCheckedFrist}
          />
          <Form.Check
            type="radio"
            label="Não"
            id="radio-2"
            name="group1"
            onChange={handleFalse}
          />
          <br />
          {/*pergunta 2 */}
          <div id={perg2 ? "show" : "perg"}>
            <Row>
              <Col lg={9}>
                <Form.Label className="box_form">
                  Este convênio é para emissão de boletos{" "}
                  <strong>sem registro</strong>?
                </Form.Label>
                <div className="box_border"></div>
              </Col>
              <Col>
                <div className="help">
                  <p>
                    Não sei o que é<span className="question_mark">?</span>
                  </p>
                </div>
              </Col>
            </Row>
            <Form.Check
              type="radio"
              label="Sim"
              id="radio-3"
              name="group2"
              onChange={handleCheckedSecond}
            />
            <Form.Check
              type="radio"
              label="Não"
              id="radio-4"
              name="group2"
              onChange={handleFalse}
            />
          </div>
          <br />
          {/*pergunta 3 */}
          <div id={perg3 ? "show" : "perg"}>
            <Form.Label className="box_form">
              Responda as seguintes perguntas
            </Form.Label>
            <div className="box_border"></div>
            <Form.Check
              type="checkbox"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus sollicitudin mi, non laoreet magna porttitor non. Aenean quis rhoncus dolor. Donec lectus sapien, semper fermentum aliquam id, condimentum a leo."
              id="box-1"
              name="group1"
            />
            <br />
            <Form.Check
              type="checkbox"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus sollicitudin mi, non laoreet magna porttitor non. Aenean quis rhoncus dolor. Donec lectus sapien, semper fermentum aliquam id, condimentum a leo."
              id="box-2"
              name="group1"
            />
            <br />
            <Form.Check
              type="checkbox"
              label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus sollicitudin mi, non laoreet magna porttitor non. Aenean quis rhoncus dolor. Donec lectus sapien, semper fermentum aliquam id, condimentum a leo."
              id="box-3"
              name="group1"
            />
            <div className="box_btn">
              <Button variant="success">PRÓXIMO</Button>
            </div>
          </div>
        </Form.Group>
      </div>
    </div>
  );
}

export default Inicio;
