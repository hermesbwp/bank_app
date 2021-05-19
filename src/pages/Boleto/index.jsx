import React from "react";
import BoletoComponent from "../../components/Boleto";
import Number from "../../components/Number";
// import { Container } from './styles';

function Boleto() {
  return (
    <div>
      <Number page={3} />
      <BoletoComponent />
    </div>
  );
}

export default Boleto;
