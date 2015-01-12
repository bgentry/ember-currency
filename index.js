/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-currency',

  blueprintsPath: function blueprintsPath() {
    return path.join(__dirname, 'blueprints');
  },

  included: function included(app) {
    this.app = app;

    this._super.included(app);

    app.import(app.bowerDirectory + '/currency.js/currency.js');

    app.import(app.bowerDirectory + '/ember-cli-currency-shim/currency-shim.js', {
      exports: {
        currency: ['default']
      }
    });
  }
};
