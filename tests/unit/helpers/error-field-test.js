import { errorField } from '../../../helpers/error-field';
import { module, test } from 'qunit';

module('Unit | Helper | error field');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = errorField([{email: "Blank"}]);
  assert.ok(result);
});
