import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import ENV from '../config/environment';

export default Base.extend({
    restore(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if (!Ember.isEmpty(data.token)) {
                resolve(data);
            } else {
                //  TODO
                reject();
            }
        });
    },

    authenticate(credentials) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
                url:         ENV.api + "/session",
                type:        "POST",
                contentType: 'application/json',
                data: JSON.stringify({ email: credentials.email, password: credentials.password })
            }).then(function(response) {
                Ember.run(function() {
                    resolve({ token: response.session.token });
                });
            }, function(xhr) {
                var response = JSON.parse(xhr.responseText);
                Ember.run(function() {
                    reject(response);
                });
            });
        });
    },

    invalidate() {
        // TODO
        return Ember.RSVP.resolve();
    }
});
