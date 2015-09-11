import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Component.extend({
    validConfirm: function() {
        var elts = this.$(".confirmPassword")[0];
        if(elts !== undefined && this.get('password') !== this.get('confirmPassword')) {
            elts.setCustomValidity("Les mots de passe ne correspond pas");
        }
        else {
            elts.setCustomValidity("");
        }
    }.observes("confirmPassword", "password"),

    actions: {
        changePassword: function() {
            var _this = this;
            Ember.$.ajax({
                type: "POST",
                url: ENV.api + '/users/' + this.get('userId'),
                data: JSON.stringify({password: this.get('password')}),
                contentType: 'application/json'
            }).then(function() {
                _this.set('successMessage', true);
                _this.set('error', undefined);
            },
            function(xhr) {
                var response = JSON.parse(xhr.responseText);
                _this.set('successMessage', false);
                _this.set('error',  JSON.stringify(response));
            });
        }
    }
});

