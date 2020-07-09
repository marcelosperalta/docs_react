import React from "react"

// usado no exemplo 1, 2, 3 e 4
// function Primeiro() {

// exemplo 1
// return "Primeiro";

// exemplo 2
// return (
//     <div>
//         <h1>Primeiro Componente</h1>
//         <h2>Exemplo de um componente React</h2>
//     </div>
// )

// exemplo 3
// return (
//     <>
//         <h1>Primeiro Componente</h1>
//         <h2>Exemplo de um componente React</h2>
//     </>
// )

// exemplo 4
//     return (
//         <React.Fragment>
//             <h1>Primeiro Componente</h1>
//             <h2>Exemplo de um componente React</h2>
//         </React.Fragment>
//     )
// }

// usado no exemplo 1, 2, 3 e 4
// export default Primeiro

// exemplo 5
// export default function () {
//     return (
//         <React.Fragment>
//             <h1>Primeiro Componente</h1>
//             <h2>Exemplo de um componente React</h2>
//         </React.Fragment>
//     )
// }

// exemplo 6
// export default () => {
//     return (
//         <React.Fragment>
//             <h1>Primeiro Componente</h1>
//             <h2>Exemplo de um componente React</h2>
//         </React.Fragment>
//     )
// }

// exemplo 7
// export default () =>
//     <React.Fragment>
//         <h1>Primeiro Componente (Arrow)</h1>
//         <h2>Exemplo de um componente React</h2>
//     </React.Fragment>

// exemplo 8
export default () =>
    <>
        <h1>Primeiro Componente (Arrow)</h1>
        <h2>Exemplo de um componente React</h2>
    </>
