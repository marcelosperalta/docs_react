import "./index.css"
import React from "react"
import ReactDOM from "react-dom"

// import Primeiro from "./components/Primeiro"
// import ComParametro from "./components/ComParametro"
import ComFilhos from "./components/ComFilhos"

// ReactDOM.render(
//     // <h1>Olá React!</h1>,
//     <div>
//         {/* <Primeiro>Primeiro</Primeiro> */}
//         {/* <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo"></ComParametro> */}
//         <Primeiro />
//         <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
//         <ComParametro titulo="Opa" subtitulo="Epa" />
//     </div>,
//     document.getElementById("root")
// )

ReactDOM.render(
    <div>
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Calors</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
        {/* {<Primeiro />
        <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
        <ComParametro titulo="Opa" subtitulo="Epa" />} */}
    </div>,
    document.getElementById("root")
)