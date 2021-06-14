// import React from "react"

// class Contador extends React.Component {
// }

// ou

import "./Contador.css"
import React, { Component } from "react"
import Display from "./Display"
import PassoForm from "./PassoForm"
import Botoes from "./Botoes"

export default class Contador extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         passo: props.passo,
    //         valor: 0
    //     }
    // }

    // ou

    // state = {
    //     passo: this.props.passo,
    //     valor: 0
    // }

    // ou

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    // modifica apenas valor sem usar o passo
    // incrementar = () => {
    //     this.setState({
    //         valor: this.state.valor + 1
    //     })
    // }

    // decrementar = () => {
    //     this.setState({
    //         valor: this.state.valor - 1
    //     })
    // }

    incrementar = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    decrementar = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>

                {/* <div> */}
                        {/* <label for="passoInput">Passo: {this.state.passo}</label> */}
                    {/* <label for="passoInput">Passo: </label> */}
                        {/* <input id="passoInput" type="number" style={{fontSize: "1.4rem", width: "60px"}} */}
                    {/* <input id="passoInput" type="number"
                    value={this.state.passo} 
                    onChange={e => this.setState({ passo: +e.target.value })}/>
                </div> */}

                <PassoForm 
                    passo={this.state.passo}
                    onPassoChange={this.mudarPasso}>
                </PassoForm>

                {/* <h4>Valor: {this.state.valor}</h4> */}
                <Display valor={this.state.valor}></Display>

                {/* <div>
                    <button onClick={this.incrementar}>+</button>
                    <button onClick={this.decrementar}>-</button>
                </div> */}
                <Botoes onIncrementar={this.incrementar} onDecrementar={this.decrementar}></Botoes>
            </div>
        )
    }
}