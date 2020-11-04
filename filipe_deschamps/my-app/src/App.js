import './App.css';

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
  return (
    <div>
      <div>1</div>
      <button>Adicionar</button>
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
