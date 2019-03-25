# Q & A Portion

## [ ] Mention two parts of Express that you learned about this week.
It will be building RESTful Web APIs with Express and Node.js

- NodeJS is a runtime environment that allows javascript to be run on the back-end where it wasn't able to before. Express is a web application framework that sits on top of the Node.js web server (http server module). It’s like React, for your backend.

- Connect middleware is an extensive collection of modules which you can download and helps "glue" together middlewares to handle requests.


## [ ] Describe Middleware?
- is an array of functions that get the request and response objects and can operate on them and either return the response or call the next middleware in the pipeline. Examples are logging or security.

- There are built-in middleware, third-party middleware, and custom middleware that we write. Some examples mentioned in class include morgan, cors, and helmet.


##[ ] Describe a Resource?
- A resource is an item in the server that can be used and passed between server and client. They represent the payload of the route handler functions most of the time in the form of JSON.


##[ ] What can the API return to help clients know if a request was successful?
- It publishes a set of endpoints that clients can use to manage resources.

- The API can return a HTTP code to let users know the request was a success. In this case, "200" is the proper code for this. Other codes include "201" for successfully created and "202" for accepted.


##[ ] How can we partition our application into sub-applications?
- We can write custom middleware that acts on our routes, which also happens to be middleware themselves. We can separate them out to different files having these modular middlewares that can be used across one or many of our route handler paths.