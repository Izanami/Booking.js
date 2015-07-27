import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        authenticate: function() {
            var _this = this;
            var credentials = this.getProperties('email', 'password');

            this.get('session').authenticate('authenticator:custom', credentials).then(function(){
                _this.sendAction();
            }, function(msg) {
                _this.set('errorMessage', msg.error);
                _this.set('errorCourriel', msg.errors.email);
                _this.set('errorPassword', msg.errors.password);
            });
        }
    }
});
