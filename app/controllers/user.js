import Ember from 'ember';

export default Ember.Controller.extend({
    multipleUser: true,

    foundUser: function() {
        if (this.get('model')) {
            return (this.get('model').get('length') > 0);
        }
        else {return true;}
    }.property('model'),


    suggest: function() {
        var email = this.get('email');
        var s = "";
        var b = true;

        if(email === undefined) {return false;}
        email = email.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$&");
        var re = new RegExp("^" + email);

        if(this.get('model').get('length') === 0) {
             b = false;
        }

        if(this.get('model').get('length') === 1) {
            var suggest = this.get('model').get('firstObject').get('email');
            if(re.exec(suggest) !== null) {
                s = suggest;
                b = false;
            }
        }
        this.set('multipleUser', b);
        this.set('suggestEmail', s);
    }.observes('model'),

    search: function() {
        var self = this;
        var re = new RegExp(self.get('email'));
        this.store.findAll('user').then(function(results) { // Get users
            if(self.get('email') !== '') { // If input is not blank
                /*Filter*/
                results = results.filter(function(item) {
                    if (re.exec(item.get('email')) !== null) {return true;}
                });}
                self.set('model', results); // Show list user
        });
    }.observes('email'),

    actions: {
        search: function(email) {
            this.set('email', email);
        }
    }
});
