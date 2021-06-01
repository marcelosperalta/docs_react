import { useState } from 'react'

export default function ContadorState() {
    const [contador,setContador] = useState(1);


    function adicionarContador() {
        setContador(contador + 1)
    }

    return (
        <div>
            &nbsp; <button onClick={adicionarContador}>Adicionar</button> &nbsp; <span>{contador}</span>
        </div>
    )
}