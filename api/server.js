const express = require('express');

const routes = require('../data/routers/routes')
const middleware = require('./middleware')
const server = express();

middleware(server)

routes.projectRouters(server);


module.exports = server;