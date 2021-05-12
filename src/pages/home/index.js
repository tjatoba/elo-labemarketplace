import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import SliderHome from './slider'
import ListaProdutos from './produtos'
import {Header, Footer, DistanciaHeader} from '../../components'

class Home extends Component {
    render (){
        

        console.log(this.props.produtosNoCarrinho)
        return(
            <div>
                <Header produtosNoCarrinho={this.props.produtosNoCarrinho}/>
                <DistanciaHeader/>
                <SliderHome/>
                <ListaProdutos adicionarProduto={this.props.adicionarProduto}/>
                <Footer/>
            </div>
        )
    }
}

export default Home