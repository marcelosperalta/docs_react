import React, { useState } from "react"
import FilhoSub from "./FilhoSub"

export default props => {

    const [texto, setTexto] = useState("Valor")
    const [num, setNum] = useState(0)

    // function quandoClicar(valorGerado, texto){
    //     console.log("Ação!!!");
    //     console.log(valorGerado);
    //     console.log(texto);
    // }

    function quandoClicar(valorGerado, texto){
        setNum(valorGerado);
        setTexto(texto);
    }

    return (
        <div>
        {/* <h4>Valor: {num}</h4> */}
        <h4>{texto}: {num}</h4>
        <FilhoSub onClicar={quandoClicar}></FilhoSub>
        </div>
    );
};