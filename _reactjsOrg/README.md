<div>
  <img 
    src="./readme/usa.png"
    width="16px">
    english version:
  </img>
</div>

# [React.org](https://reactjs.org/)

A JavaScript library for building user interfaces  

<br>

<div>
  <img 
    src="./readme/brasil.png"
    width="16px">
    portuguese version:
  </img>
</div>

# [React.org](https://pt-br.reactjs.org/)

Uma biblioteca JavaScript para criar interfaces de usuário  

- Declarativo  
- Baseado em componentes  

**[Babel REPL](https://babeljs.io/repl/)**
_Permite ver o código JavaScript bruto produzido pela etapa de compilação do JSX._  

- método ```render()```  
- this.props  
- this.state  

## Editores Online

[CODEPEN](https://codepen.io/)  
[CodeSandbox](https://codesandbox.io/)  
[Stackblitz](https://stackblitz.com/)  

## Código HTML para demonstrações simples

:file_folder: 1_builtInHTML  

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

    <!-- Don't use this in production: -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">

      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );

    </script>
    <!--
      Note: this page is a great way to try React but it's not suitable for production.
      It slowly compiles JSX with Babel in the browser and uses a large development build of React.

      Read this section for a production-ready setup with JSX:
      https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project

      In a larger project, you can use an integrated toolchain that includes JSX instead:
      https://reactjs.org/docs/create-a-new-react-app.html

      You can also use React without JSX, in which case you can remove Babel:
      https://reactjs.org/docs/react-without-jsx.html
    -->
  </body>
```

## Adicione React a um Website

### Adicione o React em Um Minuto

:file_folder: 2_addOneMinute  

