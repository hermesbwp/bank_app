import React from "react";
import Number from "../../components/Number";
//import BankCard from "../../components/Bank/BankCard";
import BankForm from "../../components/Bank/BankForm";

//<BankCard />
// import { Container } from './styles';

function Dados() {
  return (
    <div>
      <Number page={2} />
      <BankForm />
    </div>
  );
}

export default Dados;
