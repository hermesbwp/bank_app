import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "./BankForm.css";

function BankForm() {
  const [name, setName] = useState("");
  const [agencia, setAgencia] = useState("");
  const [agenciaDv, setAgenciaDv] = useState("");
  const [conta, setConta] = useState("");
  const [contaDv, setContaDv] = useState("");
  const [numeroCarteira, setNumeroCarteira] = useState("");
  const [convenio, setConvenio] = useState("");
  const [nomeCedente, setNomeCedente] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [uf, setUf] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [numero, setNumero] = useState("");

  const onChangeName = ({ target: { value } }) => {
    setName(value);
  };
  const onChangeAgencia = ({ target: { value } }) => {
    setAgencia(value);
  };
  const onChangeAgenciaDv = ({ target: { value } }) => {
    setAgenciaDv(value);
  };
  const onChangeConta = ({ target: { value } }) => {
    setConta(value);
  };
  const onChangeContaDv = ({ target: { value } }) => {
    setContaDv(value);
  };
  const onChangeNumeroCarteira = ({ target: { value } }) => {
    setNumeroCarteira(value);
  };
  const onChangeConvenio = ({ target: { value } }) => {
    setConvenio(value);
  };
  const onChangeNomeCedente = ({ target: { value } }) => {
    setNomeCedente(value);
  };
  const onChangeCpf = ({ target: { value } }) => {
    setCpf(value);
  };
  const onChangeEndereco = ({ target: { value } }) => {
    setEndereco(value);
  };
  const onChangeComplemento = ({ target: { value } }) => {
    setComplemento(value);
  };
  const onChangeCidade = ({ target: { value } }) => {
    setCidade(value);
  };
  const onChangeBairro = ({ target: { value } }) => {
    setBairro(value);
  };
  const onChangeUf = ({ target: { value } }) => {
    setUf(value);
  };
  const onChangeCep = ({ target: { value } }) => {
    setCep(value);
  };
  const onChangeNumero = ({ target: { value } }) => {
    setNumero(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name.trim() ||
      !agencia.trim() ||
      !agenciaDv.trim() ||
      !conta.trim() ||
      !contaDv.trim() ||
      !numeroCarteira.trim() ||
      !nomeCedente.trim() ||
      !convenio.trim() ||
      !cpf.trim() ||
      !endereco.trim() ||
      !complemento.trim() ||
      !bairro.trim() ||
      !uf.trim() ||
      !cidade.trim() ||
      !cep.trim() ||
      !numero.trim()
    ) {
      toast.error("Algum campo não foi preenchido");
    } else toast.info("Sucesso!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="box_text">
        <p>Dados do convênio:</p>
      </div>
      <div className="box_border"></div>
      <Row>
        <Col xs lg={3}>
          <Form.Group>
            <Form.Control
              placeholder="Nome"
              className="input_box"
              value={name}
              onChange={onChangeName}
            />
          </Form.Group>
        </Col>
        <Col xs lg={2}>
          <Form.Group>
            <Form.Control
              placeholder="Agência"
              className="input_box"
              value={agencia}
              onChange={onChangeAgencia}
            />
          </Form.Group>
        </Col>
        <Col xs lg={1}>
          <Form.Group>
            <Form.Control
              placeholder="DV"
              className="input_box"
              value={agenciaDv}
              onChange={onChangeAgenciaDv}
            />
          </Form.Group>
        </Col>
        <Col xs lg={2}>
          <Form.Group>
            <Form.Control
              placeholder="Conta"
              className="input_box"
              value={conta}
              onChange={onChangeConta}
            />
          </Form.Group>
        </Col>
        <Col xs lg={1}>
          <Form.Group>
            <Form.Control
              placeholder="DV"
              className="input_box"
              value={contaDv}
              onChange={onChangeContaDv}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <Form.Group>
            <Form.Control
              placeholder="Número da Carteira"
              className="input_box"
              value={numeroCarteira}
              onChange={onChangeNumeroCarteira}
            />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group>
            <Form.Control
              placeholder="Convênio"
              className="input_box"
              value={convenio}
              onChange={onChangeConvenio}
            />
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
            <Form.Control
              placeholder="Nome"
              className="input_box"
              value={nomeCedente}
              onChange={onChangeNomeCedente}
            />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group>
            <Form.Control
              placeholder="CPF/CNPJ do cedente"
              className="input_box"
              value={cpf}
              onChange={onChangeCpf}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
          <Form.Group>
            <Form.Control
              placeholder="Endereço"
              className="input_box"
              value={endereco}
              onChange={onChangeEndereco}
            />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group>
            <Form.Control
              placeholder="Complemento"
              className="input_box"
              value={complemento}
              onChange={onChangeComplemento}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col lg={2}>
          <Form.Group>
            <Form.Control
              placeholder="Número"
              className="input_box"
              value={numero}
              onChange={onChangeNumero}
            />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group>
            <Form.Control
              placeholder="Bairro"
              className="input_box"
              value={bairro}
              onChange={onChangeBairro}
            />
          </Form.Group>
        </Col>
        <Col lg={2}>
          <Form.Group>
            <Form.Control
              placeholder="CEP"
              className="input_box"
              value={cep}
              onChange={onChangeCep}
            />
          </Form.Group>
        </Col>
        <Col lg={1}>
          <Form.Group>
            <Form.Control
              placeholder="UF"
              className="input_box"
              value={uf}
              onChange={onChangeUf}
            />
          </Form.Group>
        </Col>
        <Col lg={3}>
          <Form.Group>
            <Form.Control
              placeholder="Cidade"
              className="input_box"
              value={cidade}
              onChange={onChangeCidade}
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="box_btn">
        <Button variant="success" type="submit">
          PRÓXIMO
        </Button>
      </div>
    </Form>
  );
}

export default BankForm;
