'use strict';

import Model from '../models/model';
import { thnk, r } from '../db/';

export const create = (req, res) => {
    Model.save(req.body).then(function(result) {
        res.status(200).json(result);
    }).error(function(err) {
        res.status(500).json({ message: err });
    });
};


export const list = (req, res) => {
    Model.orderBy({ index: r.desc('date') }).run().then(function(models) {
        res.json(models);
    }).error(function(err) {
        res.status(500).json({ message: err });
    });
};
