import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contact-add', 'Integration | Component | contact add', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(0);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contact-add}}`);

  // Template block usage:
  this.render(hbs`
    {{#contact-add}}
      template block text
    {{/contact-add}}
  `);
});
