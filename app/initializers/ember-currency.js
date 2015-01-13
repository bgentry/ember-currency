import formatCurrency from 'ember-currency/helpers/format-currency';
import Ember from 'ember';

export var initialize = function(/* container, app */) {
  var helper = (Ember.HTMLBars || Ember.Handlebars).helper;

  helper('format-currency', formatCurrency);
}

export default {
  name: 'ember-currency',
  initialize: initialize
};
