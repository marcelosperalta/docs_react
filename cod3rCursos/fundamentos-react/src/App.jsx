import "./App.css"
import React from "react"

import Primeiro from "./components/Primeiro"
import ComParametro from "./components/ComParametro"
import ComFilhos from "./components/ComFilhos"
import Card from "./components/layout/Card"
import Repeticao from "./components/Repeticao"
import Condicional from "./components/Condicional"

export default (props) => (
        <div className="App">

        <Card titulo="#05 - Condicional v1">
            <Condicional numero={11}></Condicional>
        </Card>

        <Card titulo="#04 - Repetição">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#03 - Componente Com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Calors</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente Com Parâmetro">
            <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        </Card>

        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>

        {/* 
        {<Primeiro />
        <ComParametro titulo="Opa" subtitulo="Epa" />}
        */}
    </div>
);