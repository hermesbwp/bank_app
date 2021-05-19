import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import Home from './pages/Home';
import Inicio from './pages/Inicio';
import Dados from './pages/Dados';
import Boleto from './pages/Boleto';
import Retorno from './pages/Retorno';
import Fim from './pages/Fim';
import Head from './components/Head';
import Nav from './components/Nav';
import './index.css'

function Routes() {
    return (
        <BrowserRouter>
            <Row className="box">
                <Col lg={3} className="box_nav">
                    <Nav className="nav_box" />
                </Col>
                <Col>
                    <hr />
                    <Head />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/inicio" exact component={Inicio} />
                        <Route path="/dados" exact component={Dados} />
                        <Route path="/boleto" exact component={Boleto} />
                        <Route path="/retorno" exact component={Retorno} />
                        <Route path="/fim" exact component={Fim} />
                    </Switch>
                </Col>
            </Row>
        </BrowserRouter >
    );
}

export default Routes;