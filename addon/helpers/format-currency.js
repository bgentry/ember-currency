import Helper from '@ember/component/helper';
import currencyjs from 'currency';

export function formatCurrency([value]) {
  return currencyjs(value).format();
}

export default Helper.helper(formatCurrency);
