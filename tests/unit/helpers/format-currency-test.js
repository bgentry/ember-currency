import {
  formatCurrency
} from 'ember-currency/helpers/format-currency';
import { module, test } from 'qunit';

module('FormatCurrencyHelper');

test('it correctly renders a currency', function(assert) {
  var result = formatCurrency(['1234.56789']);
  assert.equal(result.toString().trim(), '1,234.57');
});
