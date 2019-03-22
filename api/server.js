const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('morgan');
const projectRouters = require('../data/routers/projectRouters')

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger("combined"));





module.exports = server;