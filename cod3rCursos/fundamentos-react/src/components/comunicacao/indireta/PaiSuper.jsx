import React from "react"
import FilhoSub from "./FilhoSub"

export default props => {

    function quandoClicar(valorGerado){
        console.log("Ação!!!");
        console.log(valorGerado);
    }

    return (
        <div>
        <h4>Valor</h4>
        <FilhoSub onClicar={quandoClicar}></FilhoSub>
        </div>
    );
};
