import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('application-topbar', 'Integration | Component | application topbar', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{application-topbar}}`);

  assert.equal(this.$().text().trim(), 'Lacadée-Mounet\n        Réverser !\n        Gestion des utilisateurs');

  // Template block usage:
  this.render(hbs`
    {{#application-topbar}}
      template block text
    {{/application-topbar}}
  `);

  assert.equal(this.$().text().trim(), 'Lacadée-Mounet\n        Réverser !\n        Gestion des utilisateurs');
});
