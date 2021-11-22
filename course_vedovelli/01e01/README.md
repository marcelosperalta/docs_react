# [Fabio Vedovelli](https://www.youtube.com/channel/UC1PUtdA_NktdtmRpF_UGG_w)

## [30 minutes of Code - S01E01: Create React App, MirageJS, Tailwind CSS e UI](https://www.youtube.com/watch?v=SFMoonh4jVU)

<hr/>

### Tools:

<div align="center">
    <span>Create React App</span>
    &nbsp;&nbsp;&nbsp;
    <span><strong>axios</strong></span>
    &nbsp;&nbsp;&nbsp;
    <span>Mirage JS</span>
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

_axios_

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