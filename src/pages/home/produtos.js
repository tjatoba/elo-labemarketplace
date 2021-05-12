import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Titulo } from "../../components";
import { Tooltip } from 'antd';

const ContainterProdutos = styled.div`
  min-height: 500px;
  width: 80vw;
  margin: auto;
`;

const ListaDeProdutos = styled.div`
  display: grid;
  justify-content: space-between;
  grid-row-gap: 75px;
  margin-bottom: 75px;
  grid-template-columns: 22% 22% 22% 22%;
`;

const CardProduto = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 5px solid white;
  :hover {
    border-bottom: 5px solid #ad2985;
  }
`;

const DivImagem = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  float: left;
`;

const ImagemProduto = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const NomeLoja = styled.div`
  background-color: #ad2985;
  font-size: 18px;
  color: white;
  border-radius: 0px 100px 0px 0px;
  padding: 5px 0px 5px 15px;
  width: 75%;
  position: absolute;
  bottom: 0;
`;

const InfosProduto = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const NomeProduto = styled.label`
  color: #202020;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 5px;
  height: 40px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  `;

const DescricaoProduto = styled.label`
  color: #202020;
  text-align: center; 
  font-size: 18px;
  height: 60px;
  width: 100%;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
`;

const PrecoProduto = styled.label`
  color: #e44e6d;
  font-weight: 700;
  font-size: 25px;
  margin: 15px;
`;

const BotaoAdiciconar = styled.button`
  border: none;
  font-weight: 500;
  font-size: 16px;
  background: #ffe3ea;
  box-shadow: 0px 3px 6px #00000012;
  padding: 10px 25px 10px 25px;
  border-radius: 10px;
  :hover {
    background-color: #e44e6d;
    transform: scale(1.1);
    color: white;
    cursor: pointer;
  }
  :focus {
    outline: none;
  }
`;
const ColorFilter = styled.div`
  height: 13vh;
  width: 100%;
  background: var(--unnamed-color-e44e6d) 0% 0% no-repeat padding-box;
  background: #e44e6d 0% 0% no-repeat padding-box;
  margin: auto;
`;

const FilterContainer = styled.div`
  display: flex;
  height: 13vh;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
  opacity: 1;
  color: #ffffff;
  font-size: 14px;
  width: 80vw;
  margin: auto;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Field = styled.input`
  font-size: 15px;
  border: none;
  outline: none;
  border-bottom: 1px solid #ffffff;
  background: var(--unnamed-color-e44e6d) 0% 0% no-repeat padding-box;
  background: #e44e6d 0% 0% no-repeat padding-box;
  color: #ffffff;
  width: 12vw;
  opacity: 0.3;
  ::placeholder {
    color: #ffffff;
  }
  :focus {
    opacity: 1;
  }
`;
const SelectFilter = styled.select`
  font-size: 15px;
  border: none;
  outline: none;
  border-bottom: 1px solid #ffffff;
  background: var(--unnamed-color-e44e6d) 0% 0% no-repeat padding-box;
  background: #e44e6d 0% 0% no-repeat padding-box;
  color: #ffffff;
  width: 12vw;
  opacity: 0.3;
`;

const TituloFiltro = styled.label`
  font-size: 17px;
  margin-bottom: 7px;
`;

class ListaProdutos extends Component {
  state = {
    produtos: [],
    listaFiltrada: [],
    carregandoProdutos: false,
    inputValorMin: "",
    inputValorMax: "",
    inputBuscaNome: "",
    sort: "",
    categoria: "",
  };
  componentDidMount() {
    this.retornarProdutos();
  }

  retornarProdutos = () => {
    this.setState({ carregandoProdutos: true });
    var axios = require("axios");

    var config = {
      method: "get",
      url:
        "https://us-central1-labenu-apis.cloudfunctions.net/eloFourThree/products/",
      headers: {},
    };

    axios(config)
      .then(
        function (response) {
          this.setState({
            produtos: response.data.products,
            carregandoProdutos: false,
          });
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error);
      });
  };

  FiltrarLista = () => {
    return this.state.produtos
      .filter((produto) => {
        const categoriaProduto = produto.category.toLowerCase();
        if (categoriaProduto.includes(this.state.categoria.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      })
      .filter((produto) => {
        if (
          this.state.inputValorMin === "" ||
          this.state.inputValorMin <= produto.price
        ) {
          return true;
        } else {
          return false;
        }
      })
      .filter((produto) => {
        if (
          this.state.inputValorMax === "" ||
          this.state.inputValorMax >= produto.price
        ) {
          return true;
        } else {
          return false;
        }
      })
      .filter((produto) => {
        const nomeProduto = produto.name.toLowerCase();
        const descricaoProduto = produto.description.toLowerCase();
        if (
          nomeProduto.includes(this.state.inputBuscaNome.toLowerCase()) ||
          descricaoProduto.includes(this.state.inputBuscaNome.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      })
      .sort((a, b) => {
        const nomeA = a.name.toLowerCase(),
          nomeB = b.name.toLowerCase();
        if (this.state.sort === "CRESCENTE") {
          return a.price - b.price;
        } else if (this.state.sort === "DECRESCENTE") {
          return b.price - a.price;
        } else if (this.state.sort === "A-Z") {
          return nomeA.localeCompare(nomeB);
        } else if (this.state.sort === "Z-A") {
          return nomeB.localeCompare(nomeA);
        }
      });
  };

  onChangeInputMin = (event) => {
    this.setState({ inputValorMin: event.target.value });
  };

  onChangeInputMax = (event) => {
    this.setState({ inputValorMax: event.target.value });
  };

  onChangeInputBuscaNome = (event) => {
    this.setState({ inputBuscaNome: event.target.value });
  };

  onChangeSort = (event) => {
    this.setState({ sort: event.target.value });
  };

  onChangeCategoria = (event) => {
    this.setState({ categoria: event.target.value });
  };

  render() {
    let listaFiltrada = this.FiltrarLista();

    return (
      <div>
        <ColorFilter>
          <FilterContainer>
            <InputDiv>
              <TituloFiltro>Loja</TituloFiltro>
              <SelectFilter
                name="value"
                value={this.state.categoria}
                onChange={this.onChangeCategoria}
              >
                <option value ={""}>Todas</option>
                <option value={"Equilibrion"}>Equilibrion Fitness</option>
                <option value={"LNDN"}>LNDN Eyewear</option>
                <option value={"Louca Das Plantas"}>Louca das Plantas</option>
                <option value={"Maria Bonita"}>Maria Bonita</option>
              </SelectFilter>
            </InputDiv>

            <InputDiv>
              <TituloFiltro>Produto</TituloFiltro>
              <Field
                type="text"
                value={this.props.inputBuscaNome}
                onChange={this.onChangeInputBuscaNome}
                placeholder="Nome ou descrição"
              ></Field>
            </InputDiv>
            <InputDiv>
              <TituloFiltro>Valor Minimo</TituloFiltro>
              <Field
                type="number"
                value={this.props.inputValorMin}
                onChange={this.onChangeInputMin}
                placeholder="Ex: 10.00"
              ></Field>
            </InputDiv>
            <InputDiv>
              <TituloFiltro>Valor Máximo</TituloFiltro>
              <Field
                type="number"
                value={this.props.inputValorMax}
                onChange={this.onChangeInputMax}
                placeholder="Ex: 100.00"
              ></Field>
            </InputDiv>
            <InputDiv>
              <TituloFiltro>Ordenação</TituloFiltro>
              <SelectFilter
                name="value"
                value={this.state.sort}
                onChange={this.onChangeSort}
              >
                <option selected>Selecione</option>
                <option value={"CRESCENTE"}>Crescente</option>
                <option value={"DECRESCENTE"}>Decrescente</option>
                <option value={"A-Z"}>A-Z</option>
                <option value={"Z-A"}>Z-A</option>
              </SelectFilter>
            </InputDiv>
          </FilterContainer>
        </ColorFilter>

        <ContainterProdutos>
          <Titulo titulo="Lista de Produtos" />
          <ListaDeProdutos>
            {this.state.produtos.length > 0
              ? listaFiltrada.map((produto) => (
                  <CardProduto>
                    <DivImagem>
                      <ImagemProduto src={produto.photos} />
                      <NomeLoja>{produto.category}</NomeLoja>
                    </DivImagem>
                    <InfosProduto>
                        <Tooltip title={produto.name}>
                        <NomeProduto>{produto.name}</NomeProduto>
                        </Tooltip>

                        <Tooltip title={produto.description}>
                        <DescricaoProduto>{produto.description}</DescricaoProduto>
                        </Tooltip>
                      
                      <PrecoProduto>R${produto.price}</PrecoProduto>
                      <BotaoAdiciconar
                        onClick={() => this.props.adicionarProduto(produto)}
                      >
                        Adicionar Produto
                      </BotaoAdiciconar>
                    </InfosProduto>
                  </CardProduto>
                ))
              : this.state.carregandoProdutos
              ? "Carregando produtos..."
              : "Nenhum produto disponível"}
          </ListaDeProdutos>
        </ContainterProdutos>
      </div>
    );
  }
}

export default ListaProdutos;
