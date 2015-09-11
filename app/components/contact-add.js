import Ember from 'ember';

export default Ember.Component.extend({
    /* Default values */
    listCity: [],

    cityId: Ember.computed(function() {
        return this.elementId + 'city';
    }),

    /*TODO: Validator */
    searchCity: function() {
        var self = this;

        /* Request at nominatim to found city */
        Ember.$.ajax({
            url: "https://nominatim.openstreetmap.org/search?q=" + this.get('contact.city') + "&format=json&countrycodes=fr&limit=4&featuretype=city",
        }).then(function (response) {
            self.set("listCity", response);
        });

    }.observes('contact.city'),

    actions: {
        /* When select city */
        selectorCity: function(city) {
            this.set('contactCity', city.display_name); // Set input city
            this.set('contactCityNode', city.osm_id);   // Set node city
        },

        /* Create record */
        create: function() {
            var self = this;
            var store = this.get('store');

            var contact = store.createRecord('contact', {
                name: this.get('contactFullName'),
                iscorp: this.get('contactIscorp'),
                address: this.get('contactAddress'),
                node: this.get('contactCityNode'),
                phone: this.get('contactPhone'),
                phonePortable: this.get('contactPortable'),
                email: this.get('contactEmail')
            });

            contact.save().then(function() {                // If has create record
                self.sendAction('action', contact);
            }, function(response) {                         // Else : Show error
                self.set('error',  JSON.stringify(response));
            });
        }
    }
});
