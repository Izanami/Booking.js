import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('reservation', function() {
    this.route('new');
  });
  this.route('user');
  this.route('login');
  this.route('contact');
});

export default Router;
