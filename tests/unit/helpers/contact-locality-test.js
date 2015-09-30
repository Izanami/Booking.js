import { contactLocality } from '../../../helpers/contact-locality';
import { module, test } from 'qunit';

module('Unit | Helper | contact locality');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = contactLocality(["Pau, Aquitaine"]);
  assert.ok(result);
});
