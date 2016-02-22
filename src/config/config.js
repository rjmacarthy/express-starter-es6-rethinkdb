var glob = require('glob'),
    _ = require('lodash');

exports.config = {
    port: 3050,
    rethinkPort : 28015,
    routes: './src/routes/**/*.js',
    models: './src/models/**/*.js',
    db: 'mongodb://localhost/express-api-es6',
    title : 'express api boilerplate es6',
    globFiles: function(location) {
        var files = glob.sync(location);
        var output = [];
        output = _.union(output, files);
        return output;
    }
}
