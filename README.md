# Ember-currency

[currency.js](https://github.com/scurker/currency.js) addon for Ember.

## Usage

* `npm install --save ember-currency`
* `ember g ember-currency`

```js
import currency from 'currency';

export default DS.Model.extend({
  quantity: DS.attr('number'),
  shareCost: DS.attr('number'),

  value: function() {
    return currency(this.get('shareCost')).multiply(this.get('quantity')).format();
  }.property('quantity', 'shareCost'),
})

```

## Development

* `git clone` this repository
* `npm install`
* `bower install`
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
