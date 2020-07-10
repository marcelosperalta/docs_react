import React, { useState } from "react"

export default (props) => {
    // let nome = "Pedro"
    const [nome, setNome] = useState("Pedro")
    return (
    <>
        {/* <input type="text" value={null}/> */}
        {/* <input type="text" value={nome} readOnly/> */}
        <h3>{nome}</h3>
        <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
    </>
    );
};