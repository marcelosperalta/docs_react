# [Fabio Vedovelli](https://www.youtube.com/channel/UC1PUtdA_NktdtmRpF_UGG_w)

### [30 minutes of Code - S01E01: Create React App, MirageJS, Tailwind CSS e UI](https://www.youtube.com/watch?v=SFMoonh4jVU)

<hr/>

### Tools:

<div align="center">
    <a href="https://create-react-app.dev/">Create React App</a>
    &nbsp;&nbsp;&nbsp;
    <a href="https://axios-http.com/">Axios</a>
    &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/Rich-Harris/degit#readme">degit</a>
    &nbsp;&nbsp;&nbsp;
    <a href="https://miragejs.com/">Mirage JS</a>
    &nbsp;&nbsp;&nbsp;
    <a href="https://github.com/Marak/Faker.js#readme">faker.js</a>
    &nbsp;&nbsp;&nbsp;
    <a href="https://jestjs.io/">Jest</a>
    
</div>

<hr/>

### Steps:

#### _Create React App_  

````
yarn create react-app sexy
````

````
cd sexy
````

````
yarn start
````

#### _Axios_  

````
yarn add axios
````

_native alternative:_ [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)  


#### :file_folder: service > :page_facing_up: api.js  

```
import axios from "axios";

export const http = axios.create({
    baseURL: "http://localhost:3000/api",
});
```

#### _API mocking library [Mirage JS](https://miragejs.com/)_  

[How it works](https://miragejs.com/docs/getting-started/introduction/)  

[Mirage JS Starter Kit](https://github.com/vedovelli/miragejs-starter-kit)  

```
cd src && npx degit vedovelli/miragejs-starter-kit miragejs
```

```
yarn add -D miragejs faker
```

```
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (process.env.NODE_ENV === "development") {
  // You can't use import in a conditional so we're using require() so no
  // Mirage JS code will ever reach your production build.
  require('./miragejs/server').makeServer();
}

ReactDOM.render(<App />, document.getElementById("root"));
```

#### :file_folder: src > :page_facing_up: App.test.js  

*``Create React App`` uses **Jest** as its test runner.  

on Terminal (from ``sexy`` folder): `yarn test`  

