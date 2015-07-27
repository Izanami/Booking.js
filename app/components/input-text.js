import Ember from 'ember';

export default Ember.Component.extend({
    type: 'text',
    placeholder: function() {
        return "Entrée votre " + this.get('name').toLowerCase();
    }.property('name')

});
