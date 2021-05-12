import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Header, Footer, DistanciaHeader } from "../components";
import { Titulo } from "../components"
import { message, Button, Space } from 'antd';

const ButtonLogin = styled.button`
text-transform: uppercase;
border: 3px solid #E44E6D;
border-radius: 7px;
opacity: 1;
width: 180px;
height: 40px;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/25px Poppins;
letter-spacing: var(--unnamed-character-spacing-0);
text-align: center;
font: normal normal normal 16px/25px Poppins;
letter-spacing: 0px;
color: #0AAA14;
opacity: 1;
background-color: white;
color: #E44E6D;
&:hover{
  background-color: #E44E6D;
  color: white;
  transition: 150ms;
}
:focus {
    outline: none;
  }
`
const SignUP = styled.div`
    width: 80vw;
    justify-content: space-around;
    margin: auto;
`
const Container = styled.div`
width: 80vw;
height: 25vh;
text-align:center;
`
const BigContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const InputNome = styled.input`
border: none;
border-bottom: 1px solid #4a2f87;
background-color:transparent;
::placeholder{
    color:#4a2f87;
}
opacity: 0.3;
width: 100%;
outline:none;
:focus {
    opacity:1;
}
margin-bottom:50px;
`
const InputEnd = styled.input`
border: none;
border-bottom: 1px solid #4a2f87;
background-color:transparent;
::placeholder{
    color:#4a2f87;
}
opacity: 0.3;
width: 90%;
outline:none;
:focus {
    opacity:1;
}
margin-bottom:50px;
`
const InputComp = styled.input`
border: none;
border-bottom: 1px solid #4a2f87;
background-color:transparent;
::placeholder{
    color:#4a2f87;
}
opacity: 0.3;
width: 100%;
outline:none;
:focus {
    opacity:1;
}
margin-bottom:50px;
`
const InputCep = styled.input`
border: none;
border-bottom: 1px solid #4a2f87;
background-color:transparent;
::placeholder{
    color:#4a2f87;
}
opacity: 0.3;
width: 60%;
outline:none;
:focus {
    opacity:1;
}
margin-bottom:50px;
`
const InputCid = styled.input`
border: none;
border-bottom: 1px solid #4a2f87;
background-color:transparent;
::placeholder{
    color:#4a2f87;
}
opacity: 0.3;
width: 90%;
outline:none;
:focus {
    opacity:1;
}
margin-bottom:50px;
`
const InputEst = styled.input`
border: none;
border-bottom: 1px solid #4a2f87;
background-color:transparent;
::placeholder{
    color:#4a2f87;
}
opacity: 0.3;
width: 30%;
outline:none;
:focus {
    opacity:1;
}
margin-bottom:50px;
`
const InputTel = styled.input`
border: none;
border-bottom: 1px solid #4a2f87;
background-color:transparent;
::placeholder{
    color:#4a2f87;
}
opacity: 0.3;
width: 90%;
outline:none;
:focus {
    opacity:1;
}
margin-bottom:50px;
`
const InputSen = styled.input`
border: none;
border-bottom: 1px solid #4a2f87;
background-color:transparent;
::placeholder{
    color:#4a2f87;
}
opacity: 0.3;
width: 80%;
outline:none;
:focus {
    opacity:1;
}
margin-bottom:50px;
`
const InputConf = styled.input`
border: none;
border-bottom: 1px solid #4a2f87;
background-color:transparent;
::placeholder{
    color:#4a2f87;
}
opacity: 0.3;
width: 80%;
outline:none;
:focus {
    opacity:1;
}
margin-bottom:50px;
`

const Cadastrar = styled.p`
color: #4a2f87;
display:inline-block;
margin-top: 30px;

`
const CadastrarBold = styled.a`
color: #4a2f87;
font-weight: 700;
background-color:white;
border: none;
margin-left: 10px;
`
const warning = () => {
    message.warning('Esse Cadastro é apenas uma simulação');
};

class CadastroCliente extends Component {
    render() {
        return (
            <div>
                <Header produtosNoCarrinho={this.props.produtosNoCarrinho}  />
                <DistanciaHeader />
                <Titulo titulo='Login' />
                
                <SignUP>
                    <Row>
                        <Col span={24}><InputNome placeholder='Nome Completo'></InputNome></Col>
                        </Row>
                        <Row>
                            <Col span={12}><InputEnd placeholder='Endereço'></InputEnd></Col>
                            <Col span={12}><InputComp placeholder='Complemento'></InputComp></Col>
                        </Row>
                        <Row>
                            <Col span={6}><InputCep placeholder='CEP'></InputCep></Col>
                            <Col span={6}><InputCid placeholder='Cidade'></InputCid></Col>
                            <Col span={6}><InputEst placeholder='Estado'></InputEst></Col>
                            <Col span={6}><InputTel placeholder='Telefone'></InputTel></Col>
                        </Row>
                        <Row>
                            <Col span={6}><InputSen placeholder='Senha'></InputSen></Col>
                            <Col span={6}><InputConf placeholder='Confirmar Senha'></InputConf></Col>
                            <Col span={6}></Col>
                            <Col span={6}></Col>
                    </Row>
                </SignUP>
                <BigContainer>
                    <Container>
                        <ButtonLogin onClick={warning}>Cadastrar</ButtonLogin>
                        <div></div>
                        <Cadastrar>Já é cadastrado?</Cadastrar><Link to="/login-cliente"><CadastrarBold>Clique Aqui!</CadastrarBold></Link>
                    </Container>
                </BigContainer>
                <Footer />
            </div>
        )
    }
}

export default CadastroCliente