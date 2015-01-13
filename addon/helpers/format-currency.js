import Ember from 'ember';
import currencyjs from 'currency';

var formatCurrency;

if (Ember.HTMLBars) {
  formatCurrency = function formatCurrency(params) {
    var length = params.length;
    var args = [];
    var output;

    if (length === 0 || length > 1) {
      throw new TypeError('Invalid Number of arguments, expected at least 1 and at most 1');
    }

    return currencyjs(params[0]).format();
  };
} else {
  formatCurrency = function formatCurrency(value) {
    var length = arguments.length;
    var args = [];
    var output;

    if (length === 1 || length > 2) {
      // there's one extra argument that handlebars adds to the end,
      // which explains the difference in what we are checking and the error we are raising
      throw new TypeError('Invalid Number of arguments, expected at least 1 and at most 1');
    }

    return currencyjs.apply(params[0]).format();
  };
}

export default formatCurrency;
