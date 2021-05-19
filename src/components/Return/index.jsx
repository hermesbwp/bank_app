import React from "react";
import { Button } from "react-bootstrap";
import uploadImg from "../../img/upload.png";

// import { Container } from './styles';

function Return() {
  return (
    <div>
      <div className="box_text">
        <p>
          Arquivo de Retorno{" "}
          <span className="box_subTitle">
            (Esse arquivo você deve solicitar ao seu gerente)
          </span>
        </p>
      </div>
      <div className="box_border"></div>
      <div className="img_box">
        <img src={uploadImg} alt="upload" id="img_" />
      </div>
      <div className="img_box">
        <Button variant="outline-primary">ARQUIVO DE RETORNO</Button>
      </div>
      <div className="img_box">
        <p className="box_subTitle">(Essa etapa pode ser pulada)</p>
      </div>
    </div>
  );
}

export default Return;
