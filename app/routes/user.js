import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
        return this.store.findAll('user');
    },

    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('email', '');
    }
});
