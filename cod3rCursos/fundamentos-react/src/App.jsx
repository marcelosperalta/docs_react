import React from "react"

import Primeiro from "./components/Primeiro"
// import ComParametro from "./components/ComParametro"
// import ComFilhos from "./components/ComFilhos"
import Card from "./components/layout/Card"

export default (props) => (
        <div>
        <Card titulo="Primeiro Componente">
            <Primeiro />
        </Card>
        <Card titulo="Exercício X">
            Conteudo
        </Card>
        {/* <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Calors</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos> */}
        {/* {<Primeiro />
        <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        <ComParametro titulo="Opa" subtitulo="Epa" />} */}
    </div>
);