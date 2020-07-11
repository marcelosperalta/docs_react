import React from "react"

export default (props) => {

    return (
        <div>
            {/* <button onClick={e => props.incrementar(e)}>+</button> */}
            <button onClick={props.onIncrementar}>+</button>
            <button onClick={props.onDecrementar}>-</button>
        </div>
    );
};