'use strict';

import { config } from '../config/config';

export const index = (req, res) => {
    res.render('index', {title : config.title });
};
