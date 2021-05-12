import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Header, Footer, DistanciaHeader } from "../components";
import { Titulo } from "../components"
import "antd/dist/antd.css";
import { message, Button, Space } from 'antd';

const ContainerAlturaPagina = styled.div`
min-height: 100vh;
display: flex;
flex-flow: column;
justify-content: space-between;
`

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
const Container = styled.div`
width: 599px;
height: 368px;
text-align:center;
`
const BigContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Input = styled.input`
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

const Cadastrar = styled.p`
color: #4a2f87;
display:inline-block;
margin-top: 30px;

`
const CadastrarBold = styled.button`
color: #4a2f87;
font-weight: 700;
background-color:white;
border: none;
margin-left: 10px;
`
const warning = () => {
  message.warning('Esse Login é apenas uma simulação');
};


class LoginCliente extends Component {
  render() {
    return (
      <ContainerAlturaPagina>
        <Header produtosNoCarrinho={this.props.produtosNoCarrinho} />
        <DistanciaHeader />
        <Titulo titulo='Login' />

        <BigContainer>
          <Container>
            <Input placeholder='Nome'></Input>
            <Input placeholder='Email'></Input>

            <ButtonLogin onClick={warning}>Efetuar Login</ButtonLogin>

            <div></div>
            <Cadastrar>Ainda não é cadastrado?</Cadastrar><Link to='/cadastro-cliente'><CadastrarBold onClick={warning}>Clique Aqui!</CadastrarBold></Link>
          </Container>
        </BigContainer>
        <Footer />
      </ContainerAlturaPagina>
    )
  }

}

export default LoginCliente