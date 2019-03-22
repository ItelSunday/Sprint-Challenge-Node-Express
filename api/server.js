const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

// const db = require('../data/dbConfig.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan());





module.exports = server;