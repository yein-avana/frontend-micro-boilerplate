# MICRO FRONTEND BOILERPLATE

Simple boilerplate to boost development, this project run with node environment using reactJS library

# INSTALLATION

install by run `npm install` and start development by running `npm start` and it should open browser to `http://localhost:8080`

# BUILD

Run `npm run build` to build the app, it should generate `main.bundle.js` this file should inject the project into the main app, details

## How this micro project works (main.bundle.js)

Each micro project should have unique ID.

please refer to this [file](./src/index.js)

```
ReactDOM.render(<App />, document.getElementById("agent-stockist-root"));
```

we need to discuss together and decide the ID example: `agent-stockist-root`

## mockup project to preview micro project in action

you can install the main app mockup in this [link](https://github.com/yein-avana/frontend-micro-mockup "Frontend Micro Mockup")

## deployment

All we need just static js with 1 or more chunk file (if the micro apps still had large filesize) like `main.bundle.js`, deployed and accesible by public link somewhere like, example:`https://outsource.avana.asia/agent-ripple-stockist/main.bundle.js`

and it will imported using html script tag `<script src='https://outsource.avana.asia/agent-ripple-stockist/main.bundle.js' type='text/javascript'></script>`
