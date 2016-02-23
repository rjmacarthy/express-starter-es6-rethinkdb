'use strict';

import * as api from '../controllers/api';

export default (app) => {
    app.route('/api/model')
        .post(api.create)
        .get(api.list)
        

     app.route('/api/model/:id')
        .get(api.find)
        .delete(api.remove);
};
