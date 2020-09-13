import React, { Component } from "react";

import api from "../../services/api";
import Main from "../main";

import { Link } from "react-router-dom";

import "./styles.css"

export default class Product extends Component {
    state = {
        product: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/products/${id}`);

        this.setState({ product: response.data });
    }

    render() {
        const { product } = this.state;

        // return <h1>Product</h1>;
        return (
            <div className="product-info">
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <p>
                    URL: <a href={product.url}>{product.url}</a>
                </p>
                <div className="actions">
                    <Link to={`/`}>Voltar</Link>
                </div>
                
            </div>
        );
    }
}