'use strict';

import thinky from 'thinky';
import { thnk, r } from '../db/';

let Model = thnk.createModel('Model', {
    date: {
        _type: Date,
        default: r.now()
    }
});

Model.ensureIndex('date');

export default Model;
