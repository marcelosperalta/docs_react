# [Fabio Vedovelli](https://www.youtube.com/channel/UC1PUtdA_NktdtmRpF_UGG_w)

## [30 minutes of Code - S01E01: Create React App, MirageJS, Tailwind CSS e UI](https://www.youtube.com/watch?v=SFMoonh4jVU)

<hr/>

### Tools:

<div align="center">
    <span>Create React App</span>
    &nbsp;&nbsp;&nbsp;
    <span><strong>Axios</strong></span>
    &nbsp;&nbsp;&nbsp;
    <span><a href="https://github.com/Rich-Harris/degit#readme">degit</a></span>
    &nbsp;&nbsp;&nbsp;
    <span><strong>Mirage JS</strong></span>
    &nbsp;&nbsp;&nbsp;
    <span><a href="https://github.com/Marak/Faker.js#readme">faker.js</a></span>
    &nbsp;&nbsp;&nbsp;
    
</div>

<hr/>

### Steps:

_create react-app_  

````
yarn create react-app sexy
````

````
cd sexy
````

````
yarn start
````

_Axios_  

````
yarn add axios
````

_native alternative:_ [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)  


_ :file_folder: service > :page_facing_up: api.js_  

```
import axios from "axios";

export const http = axios.create({
    baseURL: "http://localhost:3000/api",
});
```

_API mocking library [Mirage JS](https://miragejs.com/)_  

[How it works](https://miragejs.com/docs/getting-started/introduction/)  

[Mirage JS Starter Kit](https://github.com/vedovelli/miragejs-starter-kit)  

```
cd src && npx degit vedovelli/miragejs-starter-kit miragejs
```

```
yard add -D miragejs faker
```