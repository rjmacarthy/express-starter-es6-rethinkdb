'use strict';

import bodyParser from 'body-parser';
import { config } from './config';
import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import _ from 'lodash';
import { instance } from '../db';
import path from 'path';

export default () => {
    var app = express();
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, '../public')));

    //Routes
    _.forEach(config.globFiles(config.routes), (route) => {
        require(path.resolve('./' + route)).default(app);
    });
    // catch 404 and forward to error handler
    app.use((err, req, res, next) => {
        var err = new Error('Not Found');
        next(err);
    });

    // production error handler
    // no stacktraces leaked to user
    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });

    if (app.get('env') === 'development') {
        app.use((err, req, res, next) => {
            res.status(500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }

    return app;
};
