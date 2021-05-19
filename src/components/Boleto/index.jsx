import React from "react";
import boletoImg from "../../img/boleto.png";
import { Button } from "react-bootstrap";
import "./index.css";
// import { Container } from './styles';

function Boleto() {
  return (
    <div>
      <div className="box_text">
        <p>
          Gerar Boleto teste{" "}
          <span className="box_subTitle">
            (Essa etapa é importante para obter se os dados estão corretos)
          </span>
        </p>
      </div>
      <div className="box_border"></div>
      <div className="img_box">
        <img src={boletoImg} alt="boleto" id="img_" />
      </div>
      <div className="img_box">
        <Button variant="primary">EMITIR BOLETO TESTE</Button>
      </div>
      <div className="img_box">
        <p className="box_subTitle">(Essa etapa pode ser pulada)</p>
      </div>
    </div>
  );
}

export default Boleto;
