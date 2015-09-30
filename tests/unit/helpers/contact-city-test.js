import { contactCity } from '../../../helpers/contact-city';
import { module, test } from 'qunit';

module('Unit | Helper | contact city');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = contactCity(["Pau, Aquitaine"]);
  assert.ok(result);
});
