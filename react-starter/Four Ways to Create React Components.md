### Four Ways to Create React Components
1. ES5 createClass
```
var HelloWorld = React.createClass({
    render: function(){
        return(
            <h1>Hello World</h1>
        );
    }
});
```
2. ES6 class
3. ES5 stateless function
```
var HelloWorld = function(props){
        return(
            <h1>Hello World</h1>
        );
});
```
4. ES6 stateless function
```
const HelloWorld = (props){
        return(
            <h1>Hello World</h1>
        );
});
```