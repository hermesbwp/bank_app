import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { VscSymbolColor } from "react-icons/vsc";
import {
  BsDashCircle,
  BsPlusCircle,
  BsPersonFill,
  BsInfoCircleFill,
} from "react-icons/bs";
import { BiDollar, BiCalendar } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { IoMdCheckboxOutline, IoMdTime } from "react-icons/io";
import { BsFillGrid3X3GapFill, BsGearFill } from "react-icons/bs";

import "./index.css";

function Nav() {
  return (
    <div>
      <ButtonGroup vertical className="btn_group">
        <Button block size="small" className="btn_element" variant="primary">
          <span className="box-icon">
            <BsInfoCircleFill />
          </span>
          Tutorial - Passo 4/5
        </Button>
        <Button block className="btn_element" variant="dark">
          <span className="box-icon">
            <VscSymbolColor />
          </span>
          Dashboard
        </Button>
        <Button block className="btn_element" variant="dark">
          <span className="box-icon">
            <BsPlusCircle />
          </span>
          Receitas
        </Button>
        <Button block className="btn_element" variant="dark">
          <span className="box-icon">
            <BsDashCircle />
          </span>
          Despesas
        </Button>
        <Button block className="btn_element" variant="dark">
          <span className="box-icon">
            <BiDollar />
          </span>
          Financeiro
        </Button>
        <Button block className="btn_element" variant="dark">
          <span className="box-icon">
            <BsFillGrid3X3GapFill />
          </span>
          Estoque
        </Button>
        <Button block className="btn_element" variant="dark">
          <span className="box-icon">
            <BiCalendar />
          </span>
          Relatórios
        </Button>
        <Button block className="btn" variant="dark">
          <span className="box-icon">
            <FaRegFolderOpen />
          </span>
          Cadastros
        </Button>
        <Button block className="btn_element" variant="dark">
          <span className="box-icon">
            <BsPersonFill />
          </span>
          Minha Conta
        </Button>
        <Button block className="btn_element" variant="dark">
          <span className="box-icon">
            <BsGearFill />
          </span>
          Configurações
        </Button>
        <Button block className="btn_element" variant="success">
          <span className="box-icon">
            <IoMdTime />
          </span>
          Flowup Time
        </Button>
        <Button block className="btn_element" variant="danger">
          <span className="box-icon">
            <IoMdCheckboxOutline />
          </span>
          Flowup Task
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Nav;
