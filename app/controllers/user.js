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
        var re = new RegExp(self.get('email'));
        this.store.findAll('user').then(function(results) {
            if(self.get('email') !== '') {
            results = results.filter(function(item) {
                if (re.exec(item.get('email')) !== null) {return true;}
            });}
            self.set('model', results);
        });
    }.observes('email'),

    actions: {
        search: function(email) {
            this.set('email', email);
        }
    }
});
