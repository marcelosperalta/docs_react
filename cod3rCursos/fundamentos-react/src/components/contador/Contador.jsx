// import React from "react"

// class Contador extends React.Component {
// }

// ou

import "./Contador.css"
import React, { Component } from "react"

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

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>

                <div>
                    {/* <label for="passoInput">Passo: {this.state.passo}</label> */}
                    <label for="passoInput">Passo: </label>
                    {/* <input id="passoInput" type="number" style={{fontSize: "1.4rem", width: "60px"}} */}
                    <input id="passoInput" type="number"
                    value={this.state.passo} 
                    onChange={e => this.setState({ passo: +e.target.value })}/>
                </div>

                <h4>Valor: {this.state.valor}</h4>

                <div>
                    <button onClick={this.incrementar}>+</button>
                    <button onClick={this.decrementar}>-</button>
                </div>
            </div>
        )
    }
}