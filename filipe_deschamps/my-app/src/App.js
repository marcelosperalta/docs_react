import './App.css';
import { useState } from 'react';

function CapsLock(props) {
  const textoInserido = props.texto;
  const textoEmCapsLock = textoInserido.toUpperCase();
  return <div>{textoEmCapsLock}</div>
}

function CapsLockFromChildren(props) {
  const textoInserido = props.children;
  const textoEmCapsLock = textoInserido.toUpperCase();
  return <div>{textoEmCapsLock}</div>
}

function Contador() {
  // nao usa "useState"
  // forma errada
  // let contador = 10;
  // function adicionarContador() {
  //   contador = contador + 1;
  //   console.log(contador);
  // }
  
  // forma correta
  const [contador,setContador] = useState(1);


  function adicionarContador() {
      setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>
      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
          <br></br>
          <CapsLock texto="CapsLock" />
          <br></br>
          <CapsLockFromChildren>Children component</CapsLockFromChildren>
          <br></br>
          <Contador />
    </div>
  );
}

export default App;
