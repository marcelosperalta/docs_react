// export default function CapsLock(props) {
//     const textoInserido = props.texto
//     const textoEmCapsLock = textoInserido.toUpperCase()
//     return <div>{textoEmCapsLock}</div>
// }

// or

export default function CapsLock(props) {
    return <div>
                &nbsp; {props.texto.toUpperCase()}
                <br></br>
                <br></br>
           </div>
}
