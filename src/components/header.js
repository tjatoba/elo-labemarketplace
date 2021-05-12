import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../imagens/logo/logo-colorido.png'
import carrinho from '../imagens/icones/shopping-cart.png'

const ContainerHeader = styled.div`
width: 100%;
height: 15vh;
display: flex;
justify-content: space-around;
align-items: center;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
opacity: 1;
position: fixed;
top: 0;
z-index: 22;

`
const SubContainerHeader = styled.div`
width: 80%;
height: 15vh;
display: flex;
justify-content: space-between;
align-items: center;

`
const ContainerLojista = styled.div`
flex: 1;
`

const ContainerCliente = styled.div`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
flex: 1;
justify-content: flex-end;
`

const ImagemLogo = styled.img`
height: 80%;
`

const Logo = styled.div`
height:80%;
display :flex;
align-items:center;
justify-content:center;
`
const LogoButton = styled.button`
height: 100%;
background-color: #FFF;
border:0;
&:hover {
    cursor: pointer;
  }
:focus {
  outline: none;
}
`

const ButtonLojista = styled.button`
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
&:hover {
    cursor: pointer;
  }
:focus {
  outline: none;
}
`

const ButtonCliente = styled.button`
text-transform: uppercase;
border: 0;
border-radius: 7px;
opacity: 1;
height: 40px;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/25px Poppins;
letter-spacing: var(--unnamed-character-spacing-0);
text-align: center;
font: normal normal normal 16px/25px Poppins;
letter-spacing: 0px;
opacity: 1;
background-color: white;
color: #E44E6D;
text-decoration: none;
padding-bottom: 2px;
margin-right: 20px;
&:hover{
  border-bottom: 2px solid #E44E6D;
  transition: 150ms;
  cursor: pointer;
  border-radius: 0px;
}
:focus {
  outline: none;
}
`
const Carrinho = styled.button`
width: 50px;
height: 45px;
background-color: white;
border: 0;
position: relative;
&:hover {
    cursor: pointer;
  }
:focus {
  outline: none;
}
`
const CarrinhoImg = styled.img`
height:30px;
`

const ContadorCarrinho = styled.div`
  background: transparent linear-gradient(161deg, #E95668 0%, #C72685 100%) 0% 0% no-repeat padding-box;
  width: 22px;
  height: 22px;
  border-radius: 100px;
  color: white;
  position: absolute;
  top: -5px;
  right: 0;
`

class Header extends Component {
  render() {
    return (
      <ContainerHeader>
        <SubContainerHeader>
          <ContainerLojista><Link to='/novo-produto'><ButtonLojista>Área do Lojista</ButtonLojista></Link></ContainerLojista>
          <LogoButton><Link to='/'><Logo><ImagemLogo src={logo}></ImagemLogo></Logo></Link></LogoButton>
          <ContainerCliente><Link to='/login-cliente'><ButtonCliente>Área do Cliente</ButtonCliente></Link>
          
          <Carrinho><Link to='carrinho'><CarrinhoImg src={carrinho}></CarrinhoImg>
                    <ContadorCarrinho>{this.props.produtosNoCarrinho}</ContadorCarrinho></Link>
          </Carrinho>
          
          </ContainerCliente>
        
        </SubContainerHeader>
      </ContainerHeader>
    )
  }
}

export default Header