import Ember from 'ember';

export default Ember.Controller.extend({
    foundUser: function() {
        if (this.get('model')) {
            return (this.get('model').get('length') > 0);
        }
        else {return true;}
    }.property('model'),

    multipleUser: function() {
        if (this.get('model')) {
            var cout =  this.get('model').get('length') > 1;
            if(cout) {
                this.set('searcher', true);
            }
            return cout;
        }
        else {return false;}
    }.property('model'),

    search: function() {
        var self = this;
        this.store.query('user', {email: this.get('email')}).then(function(results) {
            self.set('model', results);
        });
    }.observes('email'),

    actions: {
        search: function(email) {
            this.set('email', email);
            this.search();
        }
    }
});
