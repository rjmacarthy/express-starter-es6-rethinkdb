import express from 'express';
import http from 'http';
import { config } from './config/config';
import app from './config/express';

var server = http.createServer(app());

server.listen(config.port);

server.on('error', () => {
    console.log('error starting server');
});

server.on('listening', () => {
    console.log('Server started on port ' + config.port);
});

module.exports = app;
