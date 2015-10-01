import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('input-error', 'Integration | Component | input error', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(4);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{input-error}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#input-error}}
      template block text
    {{/input-error}}
  `);

  assert.equal(this.$().text().trim(), '');

  this.set('error', {message: "Test", errors: {email: "Blank"} });
  this.render(hbs`{{input-error error=error}}`);


  assert.equal(this.$("#errorMsg").text().trim(), 'Test');
  assert.equal(this.$("#errorField").text().trim(), 'email : Blank');
});
