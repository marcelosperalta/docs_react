# Primeiros passos com React
**Stoyan Stefanov**  
Novatec  
:link: https://novatec.com.br/livros/primeiros-passos-com-react/  
ISBN: 978-85-7522-520-2  

# React: Up & Running
**Stoyan Stefanov**  
O’Reilly  
:link: https://www.oreilly.com/library/view/react-up/9781491931813/  
ISBN: 9781491931820  

## Materiais suplementares do livro
:octocat: https://github.com/stoyan/reactbook  

## Problemas para visualizar o livro com o Amazon Kindle  

**Capítulo 1**  

_**Hello World**_  

Figura 1.5 - HTML...  

_imagem do corvo_  

- Como podemos ver, se você começar a aninhar componentes, acabará rapidamente precisando controlar muitas chamadas...  

_**A vida de um componente**_  

A figura 2.2 mostra o resultado.  

_imagem do corvo_  

Pense em this.props como somente para leitura. As propriedades sao úteis para transportar configuracoes dos componentes pais para os filhos (e dos filhos para os pais, como veremos mais adiante no livro). Se você...  

A figura 2.5 apresenta...  

_imagem do corvo_  

Declarar propTypes em seus componentes é opcional, o que significa também que você pode ter algumas propriedades, mas nao todas...  

Estado  

_imagem do corvo_  

As atualizacoes de UI após a chamada a ```setState()``` sao feitas usando um sistema de fila que reúne as alteracoes em lote de modo eficiente, portanto atualizar ```this.state```...  

Um component textarea com estado  

_imagem do corvo_  

Talvez você tenha notado que a textarea no trecho de código anterior aceita uma propriedade ```defaultValue``` em oposicao a um filho do tipo texto, conforme você está acostumado...

## Summary

### Capítulo 1 - Hello World

- **React.DOM.\***

e.g. React.DOM.div(attributes, children),  

```
console.log(Object.keys(React.DOM))
```

_versão JavaScript puro (.js)_  
```
ReactDOM.render(
    React.DOM.h1(null, "Hello World!"),
    document.getElementById("app")
);
```

_versão JSX (.jsx)_  
```
ReactDOM.render(
    <h1 id="my-heading">
        <span><em>Hell</em>o</span> world!
    </h1>,
    document.getElementById("app")
);
```

- **Atributos especiais do DOM**  

**```class```, ```for``` e ```style```**

_```class``` vira ```className```_  

_```for``` vira ```htmlFor```_  

_```style=""``` vira ```style:{}```_  

##### (```font-Family``` vira ```fontFamily```, ...)  

- **Extensão "React DevTools"**  

https://fb.me/react-devtools  

### Capítulo 2 - A vida de um componente

#### _stateless:_

- **React.createClass({...})**  

- ```this.props```

- **propTypes**  
*Note:  
React.PropTypes has moved into a different package since React v15.5. Please use the prop-types library instead.  
We provide a codemod script to automate the conversion.  
https://reactjs.org/docs/typechecking-with-proptypes.html  

- **getDefaultProps()**  

#### _stateful:_

Quando estado (state) muda, a React reconstrói a UI sem que você tenha que fazer nada.  

- ```this.state```

- ```this.setState()```

- ```shouldComponentUpdate()```

- ```getInitialState()```

- synthetic events