import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import "./index.css";
import banco from "../../img/banco.jpg";
function Home() {
  return (
    <div className="box_content">
      <Row>
        <Col>
          <div>
            <p className="box_text">
              Você ainda não configurou os seus convênios bancários para poder
              emitir boletos bancários
            </p>
            <div className="box_border"></div>
          </div>
          <div className="box_btn">
            <Button>CONFIGURAR AGORA</Button>
          </div>
        </Col>
        <Col>
          <div className="box_img">
            <img className="img_" src={banco} alt="planilha" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
