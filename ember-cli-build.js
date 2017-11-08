/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
    var app = new EmberApp(defaults);

    app.import(app.bowerDirectory + '/ember-cli-currency-shim/currency-shim.js', {
      exports: { currency: ['default'] }
    });

    return app.toTree();
};
