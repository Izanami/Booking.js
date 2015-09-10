import Ember from 'ember';

export default Ember.Controller.extend({

    didUser: function() {
        var self = this;
        this.store.query('user', {email: this.get('email')}).then(function(results) {
            if(results.get('length') > 0) {
                self.store.query('user', {current: "true"}).then(function(results) {
                    var current_user = results.get('firstObject');
                   if (current_user !== undefined) {
                        if ( (current_user.get('email') === self.get('email')) || (current_user.get('autorization') === 1)) {
                            self.set('setPassword', false);
                        }
                        else { self.set('setPassword', true); self.set('password', ''); }
                    }
                    else { self.set('setPassword', true); self.set('password', ''); }
                });
            }
            else { self.set('setPassword', false); }
        });
    }.observes('email')
});
