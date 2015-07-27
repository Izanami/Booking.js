import Ember from 'ember';

export default Ember.Component.extend({
    isValid: true,

    actions: {
        changePassword: function() {
            var _this = this;
            Ember.$.ajax({
                type: "POST",
                url: 'http://localhost:4567/users/' + this.get('userId'),
                data: JSON.stringify({password: this.get('password')}),
                contentType: 'application/json'
            }).then(function() {
                _this.set('successMessage', true);
            },
            function(xhr) {
                var response = JSON.parse(xhr.responseText);
                _this.set('successMessage', false);
                _this.set('errorPassword', response.errors.password);
            });
        },

        didValid: function() {
            if(this.get('password') !== this.get('confirmPassword')) {
                this.set('successMessage', false);
                this.set('confirmPassword', '');
                this.set('isValid', false);
            }
            else {
                this.set('isValid', true);
            }
        }
    }
});
