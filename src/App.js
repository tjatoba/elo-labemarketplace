import React, { Component } from "react";
import "./App.css";
import {
  Home,
  CadastroCliente,
  Carrinho,
  LoginCliente,
  NovoProduto,
} from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import { message, Button, Space } from "antd";

class App extends Component {
  state = {
    produtosNoCarrinho: 0,
    carrinho: [],
  };

  adicionarProduto = (produto) => {
    var aux = this.state.produtosNoCarrinho;
    this.setState({ produtosNoCarrinho: aux + 1 });

    const indiceProduto = this.state.carrinho.findIndex((item) => {
      return item.id === produto.id;
    });
    const novoCarrinho = [...this.state.carrinho];
    if (indiceProduto >= 0) {
      novoCarrinho[indiceProduto].quantidade++;
    } else {
      const novoProduto = { ...produto, quantidade: 1 };
      novoCarrinho.push(novoProduto);
    }
    this.setState({ carrinho: novoCarrinho });
    console.log(this.state.produtosNoCarrinho);
  };

  removerProduto = (produto) => {
    var aux = this.state.produtosNoCarrinho;
    this.setState({ produtosNoCarrinho: aux - 1 });

    const indiceProduto = this.state.carrinho.findIndex((item) => {
      return item.id === produto.id;
    });

    const novoCarrinho = [...this.state.carrinho];

    if (this.state.carrinho[indiceProduto].quantidade === 1) {
      novoCarrinho.splice(indiceProduto, 1);
    } else {
      novoCarrinho[indiceProduto].quantidade--;
    }

    this.setState({ carrinho: novoCarrinho });

    console.log(this.state.produtosNoCarrinho);
  };

  totalCarrinho = () => {
    return this.state.carrinho.reduce((total, produto) => {
      return produto.price * produto.quantidade + total;
    }, 0);
  };

  realizarPagamento = () => {
    this.setState({ carrinho: [] });
    this.setState({ produtosNoCarrinho: 0 });

    const warning = () => {
      message.warning("Realizar pagamento é apenas uma simulação");
    };
    warning();
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                produtosNoCarrinho={this.state.produtosNoCarrinho}
                carrinho={this.state.carrinho}
                adicionarProduto={this.adicionarProduto}
                removerProduto={this.removerProduto}
              />
            )}
          />
          <Route
            path="/cadastro-cliente"
            render={(props) => (
              <CadastroCliente
                {...props}
                produtosNoCarrinho={this.state.produtosNoCarrinho}
                carrinho={this.state.carrinho}
              />
            )}
          />
          <Route
            path="/carrinho"
            render={(props) => (
              <Carrinho
                {...props}
                produtosNoCarrinho={this.state.produtosNoCarrinho}
                carrinho={this.state.carrinho}
                adicionarProduto={this.adicionarProduto}
                removerProduto={this.removerProduto}
                totalCarrinho={this.totalCarrinho}
                realizarPagamento={this.realizarPagamento}
              />
            )}
          />
          <Route
            path="/login-cliente"
            render={(props) => (
              <LoginCliente
                {...props}
                produtosNoCarrinho={this.state.produtosNoCarrinho}
                carrinho={this.state.carrinho}
              />
            )}
          />
          <Route
            path="/novo-produto"
            render={(props) => (
              <NovoProduto
                {...props}
                produtosNoCarrinho={this.state.produtosNoCarrinho}
                carrinho={this.state.carrinho}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
