'use strict';

import Model from '../models/model';
import { thnk, r } from '../db/';
import _ from 'lodash';

export const handleFeed = (feed, io) => {
    feed.each((err, doc) => {
        if (doc.isSaved() === false) {
            console.log('deleted');
        } else if (doc.getOldValue() === null) {
            console.log('created');
        } else {
            console.log('update');
        }
    });
};

export const live = (io) => {
    Model.changes().then((feed) => {
        handleFeed(feed);
    }).error((err) => {
        console.log(err);
    });
};

export const create = (req, res) => {
    Model.save(req.body).then((result) => {
        res.status(200).json(result);
    }).error((err) => {
        res.status(500).json({ message: err });
    });
};


export const list = (req, res) => {
    Model.orderBy({ index: r.desc('date') }).run().then((models) => {
        res.json(models);
    }).error((err) => {
        res.status(500).json({ message: err });
    });
};

export const find = (req, res) => {
    Model.get(req.params.id).then((model) => {
        res.status(200).json(model);
    }).error((err) => {
        res.status(500).json({ message: err });
    });
};

export const remove = (req, res) => {
    Model.get(req.params.id).then((model) => {
        model.delete().then((result) => {
            res.status(200).json(result);
        });
    }).error((err) => {
        res.status(500).json({ message: err });
    });
};
