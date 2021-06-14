import React from "react"

// exemplo sem parametros
// export default () =>
//     <>
//         <h3>titulo</h3>
//         <p>subtitulo</p>
//     </>

// exemplo com parametros
// export default param =>
//     <>
//         {/* o par de chaves ("{}") é interpretado como código JavaScript */}
//         <h3>{param.titulo}</h3>
//         {/* <p>{1 + 2}</p> */}
//         {/* <p>{Array(10).fill(0)}</p> */}
//         <p>{param.subtitulo}</p>
//     </>

// exemplo com parametros usando o nome comum "props"
// export default props =>
//     <>
//         <h3>{props.titulo}</h3>
//         <p>{props.subtitulo}</p>
//     </>

// O exemplo abaixo gera erro
// TypeError: Cannot assign to read only property 'titulo' of object '#<Object>'
// export default (props) => {
    // props é somente leitura!!!!
//     props.titulo = "Outro Título"
//     return (
//     <>
//         <h3>{props.titulo}</h3>
//         <p>{props.subtitulo}</p>
//     </>
//     );
// };

export default (props) => {
    // props é somente leitura!!!!
    // props.titulo = "Outro Título"
    return (
    <>
        <h3>{props.titulo}</h3>
        <p>{props.subtitulo}</p>
    </>
    );
};