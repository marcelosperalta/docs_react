export default function CapsLockChildren(props) {
    const textoInserido = props.children
    const textoEmCapsLock = textoInserido.toUpperCase()
    return <div>
            &nbsp; {textoEmCapsLock}
            <br></br>
            <br></br>
           </div>
}