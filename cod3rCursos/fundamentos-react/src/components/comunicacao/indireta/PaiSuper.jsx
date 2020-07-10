import React from "react"
import FilhoSub from "./FilhoSub"

export default props => {

    function quandoClicar(valorGerado, texto){
        console.log("Ação!!!");
        console.log(valorGerado);
        console.log(texto);
    }

    return (
        <div>
        <h4>Valor</h4>
        <FilhoSub onClicar={quandoClicar}></FilhoSub>
        </div>
    );
};