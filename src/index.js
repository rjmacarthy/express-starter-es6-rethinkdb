import express from 'express';
import http from 'http';
import { config } from './config/config';
import app from './config/express';
import socket from 'socket.io';
import * as api from './controllers/api';

var server = http.createServer(app());

var io = socket(server);

api.live(io);

server.listen(config.port);

server.on('error', () => {
    console.log('error starting server');
});

server.on('listening', () => {
    console.log('Server started on port ' + config.port);
});

module.exports = app;
