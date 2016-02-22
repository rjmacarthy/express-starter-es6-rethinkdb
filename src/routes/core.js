'use strict';

import * as core from '../controllers/core';

export default (app) => {
	app.route('/').get(core.index);
};