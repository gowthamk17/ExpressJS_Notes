# ExpressJS Notes
+ A lightweight, fast, opiniated js backend framework
+ simple hello world [app](/hello_world.js)
+ `npx express-generator` to create server from template
+ creating a route temp -> `app.METHOD(url, handler)`
    + METHOD=get,post,put,delete 
    + app=instance of express
    + url=path on server
    + handler=callback on what to do when path requested
+ use static method for serving static files via link
    + `app.use(express.static('folder name'))` - files in the 'folder name' will be served

## Routing
+ Routing a how application handles a client's request to specific URI with the corresponding method
+ Routing path supports regex
+ There are various routing response methods which can send response to the clients or terminate the request
+ we can chain app route to handle all requests there
```javascript
app.route('/route')
    .get((req, res) => {})
    .post((req, res) => {})
    .put((req, res) => {})
```

## Writing Middleware
+ Middleware functions are functions have access to req, res obects and calls next method to run the next callback
+ Middleware are added to routes by `app.use(middleWare)`
+ these functions are called in the order they are added
+ we can create configurable middlewares by wrapping the function with a functions with accepts optios as parameters and runs based upon these paratermeters

## Using Middleware
+ If the current middleware function does not call next or end they request will be left hanging and there won't be a response
+ **Application level Middleware** these functions are added with app.use api and called every time a request is sent
```javascript
app.use((req, res, next) => {
    console.log('LOGGING');
    next();
});
```
+ **Router level Middleware** these functions are bound to a specific router only
```javascript
app.use('user/:id', (req, res, next) => {
    // ... middle ware stfuff
    next();
});
```
+ **Error Handling Middleware** these functions are same as other but have four params first one is for error
```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('something went wrong');
});
```
+ **Build In middleware** modules comes with express latest verisons
    + **express.static** serve static files
    + **express.json** parses incoming requests with json files
    + **express.urlencoded** parses incoming request with url payloads
+ **Third Party Middleware** using thirdparty middlewares
```javascript
const cookieParser = require('cookie-parse');
api.use(cookieParser());
```

## Overriding the express API
+ express has the request, response api for both express and app objects, overriding express will collapse whole app accoring to the docs we can change app prototype only if necessary 
+ we can't change the assinged property which are assinged automaticaly but we can change getters like 'ip'

## Template Engine
Express Supports some of the famous html template lib's such as pug and ejs etc,.

## Error Handling
+ Express comes with the default error handler so we don't need to write that from scratch
+ express will catch all the error thrown from synchronous code automatically
+ As for async middleware we need to call next() explicitly for allowing node to catch errors
+ for promise middle ware's we don't need to call next

## Debugging
In order debugg express app run the following comment this will logg all the request in console
`DEBUG=express:* node index.js`

[API REFERENCE LINK](https://expressjs.com/en/5x/api.html)

