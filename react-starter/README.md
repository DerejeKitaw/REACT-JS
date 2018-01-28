## Create pacckage.json file

## install npm packages
```
npm install
```

## crate index.html file

## Setup webpack

## setup .editorconfig

## Set up bable using .babelrc

## Create start script
```Create express server - .tools/srcServer.js
Create script --"start": "babel-node tools/srcServer.js"
app will run in http://localhost:3000/
```

# Set up ESLint in .eslintrc
```
0 means off
1 means Warning
2 means Error   -- this will break the build
run:---- npm run lint

"lint:watch": "npm run lint -- --watch" will run the lint script above and pass watch flag to the lint
run:---- npm run lint:watch
```

## Difference between preestart and start
prestart runs befor start run
```
crate a start message to display befor start app
"prestart": "babel-node tools/startMessage.js"
```
when npm start run --startMessage.js will run first




