import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import banco_1 from "../../img/bank_thumb_1.png";
import banco_2 from "../../img/bank_thumb_104.png";
import banco_3 from "../../img/bank_thumb_33.png";
import banco_4 from "../../img/bank_thumb_341.png";

// import { Container } from './styles';

function BankCard() {
  return (
    <div>
      <div className="box_text">
        Clique no banco em que você ou sua empresa{" "}
        <strong>possuem um convênio:</strong>
        <div className="box_border" />
      </div>
      <Row>
        <Col>
          <Card className="bank_card" as="button">
            <Row>
              <Col>
                <div className="info">
                  <p>
                    <strong>Nome:</strong> FastSoluções
                  </p>
                  <p>
                    <strong>Conta:</strong> 12345-6
                  </p>
                  <p>
                    <strong>Agência:</strong> 123.456-7
                  </p>
                </div>
              </Col>
              <Col className="box_img">
                <div>
                  <img
                    src={banco_1}
                    alt="banco miniatura"
                    className="banco_logo"
                  />
                </div>
              </Col>
            </Row>
          </Card>
          <div className="bank_card"></div>
        </Col>
        <Col>
          <Card className="bank_card" as="button">
            <Row>
              <Col>
                <div className="info">
                  <p>
                    <strong>Nome:</strong> FastSoluções
                  </p>
                  <p>
                    <strong>Conta:</strong> 12345-6
                  </p>
                  <p>
                    <strong>Agência:</strong> 123.456-7
                  </p>
                </div>
              </Col>
              <Col className="box_img">
                <div>
                  <img
                    src={banco_2}
                    alt="banco miniatura"
                    className="banco_logo"
                  />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="bank_card" as="button">
            <Row>
              <Col>
                <div className="info">
                  <p>
                    <strong>Nome:</strong> FastSoluções
                  </p>
                  <p>
                    <strong>Conta:</strong> 12345-6
                  </p>
                  <p>
                    <strong>Agência:</strong> 123.456-7
                  </p>
                </div>
              </Col>
              <Col className="box_img">
                <div>
                  <img
                    src={banco_3}
                    alt="banco miniatura"
                    className="banco_logo"
                  />
                </div>
              </Col>
            </Row>
          </Card>
          <div className="bank_card"></div>
        </Col>
        <Col>
          <Card className="bank_card" as="button">
            <Row>
              <Col>
                <div className="info">
                  <p>
                    <strong>Nome:</strong> FastSoluções
                  </p>
                  <p>
                    <strong>Conta:</strong> 12345-6
                  </p>
                  <p>
                    <strong>Agência:</strong> 123.456-7
                  </p>
                </div>
              </Col>
              <Col className="box_img">
                <div>
                  <img
                    src={banco_4}
                    alt="banco miniatura"
                    className="banco_logo"
                  />
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <div>
        <Button variant="primary">
          <span className="icon_box">
            <FiPlus />
          </span>
          ADICIONAR NOVO BANCO
        </Button>
      </div>
    </div>
  );
}

export default BankCard;
