import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('user-auth', 'Integration | Component | user auth', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{user-auth}}`);


  // Template block usage:
  this.render(hbs`
    {{#user-auth}}
      template block text
    {{/user-auth}}
  `);
});
