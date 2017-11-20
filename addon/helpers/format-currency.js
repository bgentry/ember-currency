import Ember from 'ember';
import currencyjs from 'currency';

const { Helper } = Ember;

export function formatCurrency([value]) {
  return currencyjs(value).format();
}

export default Helper.helper(formatCurrency);
