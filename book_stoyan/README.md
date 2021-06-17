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
https://github.com/stoyan/reactbook  

## Problemas para visualizar o livro com o Amazon Kindle  

**Capítulo 1**  

_**Hello World**_  

Figura 1.5 - HTML...  

_imagem do corvo_  

- Como podemos ver, se você começar a aninhar componentes, acabará rapidamente precisando controlar muitas chamadas...  

## Summary

### Capítulo 1

_**Hello World**_  

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
