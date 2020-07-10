import React from "react"

export default props => {
    return (
    <div>
        <button onClick={() => {props.onClicar(Math.random())}}>Alterar</button>
    </div>
    );
};
