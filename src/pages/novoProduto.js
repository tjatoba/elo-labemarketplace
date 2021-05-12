import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, Footer, DistanciaHeader } from "../components";
import { Titulo } from "../components";
import axios from "axios";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerInput1 = styled.div`
  width: 30%;
`;

const ContainerInput2 = styled.div`
  width: 30%;
`;

const ContainerInput3 = styled.div`
  width: 30%;
`;

const Select = styled.select`
  border: none;
  border-bottom: 1px solid #4a2f87;
  background-color: transparent;
  ::placeholder {
    color: #4a2f87;
  }
  opacity: 0.3;
  width: 100%;
  outline: none;
  :focus {
    opacity: 1;
  }
  margin-bottom: 50px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #4a2f87;
  background-color: transparent;
  ::placeholder {
    color: #4a2f87;
  }
  opacity: 0.3;
  width: 100%;
  outline: none;
  :focus {
    opacity: 1;
  }
  margin-bottom: 50px;
`;

const ContainerAlturaPagina = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const ContainerTitulo = styled.div`
  width: 80vw;
  margin: auto;
`;
const ButtonFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonLojista = styled.button`
  text-transform: uppercase;
  border: 3px solid #e44e6d;
  border-radius: 7px;
  opacity: 1;
  width: 180px;
  height: 40px;
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) 16px/25px Poppins;
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #0aaa14;
  opacity: 1;
  background-color: white;
  color: #e44e6d;
  &:hover {
    background-color: #e44e6d;
    color: white;
    transition: 150ms;
  }
  &:hover {
    cursor: pointer;
  }
  margin-bottom: 3%;
`;
const Letter = styled.p`
  color: #4a2f87;
`;
const ImgDiv = styled.div`
  width: 200px;
  height: 200px;
  background-color: #e44e6d;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
class NovoProduto extends Component {
  state = {
    productName: "",
    prodDescription: "",
    prodPrice: 0,
    payMeth: "",
    store: "",
    prodImg: [],
    prodInstallments: 0,
  };

  handleName = (e) => {
    this.setState({ productName: e.target.value });
  };

  handleDescription = (e) => {
    this.setState({ prodDescription: e.target.value });
  };

  handlePrice = (e) => {
    this.setState({ prodPrice: Number(e.target.value) });
  };

  handlePay = (e) => {
    this.setState({ payMeth: e.target.value });
  };

  handleStore = (e) => {
    this.setState({ store: e.target.value });
  };

  handleImg = (e) => {
    this.setState({ prodImg: e.target.value });
  };

  handleInstallments = (e) => {
    this.setState({ prodInstallments: Number(e.target.value) });
  };

  addProduct = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      name: this.state.productName,
      description: this.state.prodDescription,
      price: Number(this.state.prodPrice),
      paymentMethod: this.state.payMeth,
      category: this.state.store,
      photos: [this.state.prodImg],
      installments: Number(this.state.prodInstallments),
    });
    console.log(data);

    var config = {
      method: "post",
      url:
        "https://us-central1-labenu-apis.cloudfunctions.net/eloFourThree/products",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(
        function (response) {
          this.setState({ productName: "" });
          this.setState({ prodDescription: "" });
          this.setState({ prodPrice: "" });
          this.setState({ payMeth: "" });
          this.setState({ store: "" });
          this.setState({ prodImg: "" });
          this.setState({ prodInstallments: "" });
          alert("Cadastro realizado com Sucesso");
        }.bind(this)
      )

      .catch(function (error) {
        alert("Cadastro Invalido! Preencha Corretamente todos os Campos");
        console.log(error);
      });
  };

  render() {
    return (
      <ContainerAlturaPagina>
        <Header produtosNoCarrinho={this.props.produtosNoCarrinho} />
        <ContainerTitulo>
          <DistanciaHeader />
          <Titulo titulo="Novo Produto" />
        </ContainerTitulo>
        <MainContainer>
          <Container>
            <ContainerInput1>
              <Letter>Loja</Letter>
              <Select value={this.state.store} onChange={this.handleStore}>
                <option value={""}>Selecione</option>
                <option value={"Equilibrion"}>Equilibrion Fitness</option>
                <option value={"LNDN"}>LNDN Eyewear</option>
                <option value={"Louca Das Plantas"}>Louca das Plantas</option>
                <option value={"Maria Bonita"}>Maria Bonita</option>
              </Select>
              <Letter>Descrição</Letter>
              <Input
                placeholder="Ex: Vaso de ceramica medio"
                value={this.state.prodDescription}
                onChange={this.handleDescription}
              ></Input>
              <Letter>Formas de Pagamento</Letter>
              <Select value={this.state.payMeth} onChange={this.handlePay}>
                <option value={""}>Selecione</option>
                <option value={"Cartão"}>Cartão </option>
                <option value={"Dinheiro"}>Dinheiro</option>
              </Select>
            </ContainerInput1>

            <ContainerInput2>
              <Letter>Nome do Produto</Letter>
              <Input
                placeholder="Ex: Vaso Feliz"
                value={this.state.productName}
                onChange={this.handleName}
              ></Input>
              <Letter>Preço</Letter>
              <Input
                placeholder="Ex: 99,99"
                value={this.state.prodPrice}
                onChange={this.handlePrice}
              ></Input>
              <Letter>Número de Parcelas</Letter>
              <Select
                value={this.state.prodInstallments}
                onChange={this.handleInstallments}
              >
                <option value={0}>Selecione</option>
                <option value={1}>1x</option>
                <option value={2}>2x</option>
                <option value={3}>3x</option>
                <option value={4}>4x</option>
                <option value={5}>5x</option>
                <option value={6}>6x</option>
              </Select>
            </ContainerInput2>
            <ContainerInput3>
              <Letter>Imagem</Letter>
              <Input
                placeholder="Link da Imagem"
                value={this.state.prodImg}
                onChange={this.handleImg}
              ></Input>
              <ImgDiv>
                <Img src={this.state.prodImg} />
              </ImgDiv>
            </ContainerInput3>
          </Container>
        </MainContainer>
        <ButtonFlex>
          <ButtonLojista onClick={this.addProduct}>
            Publicar Produto
          </ButtonLojista>
        </ButtonFlex>
        <Footer />
      </ContainerAlturaPagina>
    );
  }
}

export default NovoProduto;
