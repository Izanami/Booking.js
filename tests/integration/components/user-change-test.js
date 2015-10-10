import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import startApp from '../../helpers/start-app';

var App;
var store;
var session;

moduleForComponent('user-change', 'Integration | Component | user change', {
  integration: true,
  setup: function () {
    App     = startApp();
    store   = App.__container__.lookup('store:main');
    session = App.__container__.lookup('simple-auth-session:main');
  },

  teardown: function () {
    Ember.run(App, App.destroy);
  }
});

test('it renders', function(assert) {
  assert.expect(4);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  //

  this.render(hbs`{{user-change}}`);
  this.$("#password input").val("12345");
  this.$("#password input").trigger("change");
  this.$("#confirmPassword input").val("01234");
  this.$("#confirmPassword input").trigger("change");
  assert.equal(this.$("#password input")[0].checkValidity(), false);
  assert.equal(this.$("#confirmPassword input")[0].checkValidity(), false);
  this.$("input[type=submit]").click();

  this.render(hbs`{{user-change userId=11}}`);
  this.$("#password input").val("123456");
  this.$("#password input").trigger("change");
  this.$("#confirmPassword input").val("123456");
  this.$("#confirmPassword input").trigger("change");
  assert.equal(this.$("#password input").checkValidity(), true);
  assert.equal(this.$("#confirmPassword input").checkValidity(), true);
  this.$("input[type=submit]").click();

  //TODO: connect
  //
  session.authenticate('authenticator:custom', {email: "admin@example.org", password: "123456"});
  console.log(store.findAll('user'));
  //console.log(session);

  // Template block usage:
  this.render(hbs`
    {{#user-change}}
      template block text
    {{/user-change}}
  `);
});
