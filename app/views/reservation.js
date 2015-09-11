import Ember from 'ember';

export default Ember.View.extend({
    didRender: function() {
        Ember.$(document).updatePolyfill();
    }
});
