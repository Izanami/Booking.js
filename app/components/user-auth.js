import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        authenticate: function() {
            var _this = this;
            var credentials = this.getProperties('email', 'password');

            this.get('session').authenticate('authenticator:custom', credentials).then(function(){
                _this.sendAction();
            }, function() {
                _this.set('errorMessage', 'Identification échouée');
            });
        }
    }
});
