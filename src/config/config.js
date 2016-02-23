var glob = require('glob'),
    _ = require('lodash');

exports.config = {
    port: 3050,
    routes: './src/routes/**/*.js',
    models: './src/models/**/*.js',
    title: 'express api boilerplate es6',
    globFiles: function(location) {
        var files = glob.sync(location);
        var output = [];
        output = _.union(output, files);
        return output;
    },
    rethink: {
        host: process.env.RDB_HOST || 'localhost',
        port: parseInt(process.env.RDB_PORT || 28015),
        db: process.env.RDB_DB || 'Test'
    }
}
