import Ember from 'ember';

Ember.TextField.reopen({
    attributeBindings: ['data-dropdown', 'data-abide-validator']
});

export default Ember.Component.extend({
    foundContact: true,

    didRender: function() {
        var self = this;
        Ember.$().foundation('reflow');
        Ember.$(document).foundation({
            abide: {
                validators: {
                    foundContact: function (el) {
                        var state = self.validator(el.value);
                        self.set('isValid', state);
                        return state;
                    }
                }
            }
        });
    },

    validator: function (name) {
        var self = this;
        var found = false;
        self.get('contacts').forEach(function(item) {
            if(item.get('name') === name){
                found = true;
                Foundation.libs.dropdown.close(Ember.$('#' + self.get('dropId')));
            }
        });
        return found;
    },

    update: function() {
        var store = this.get('store');
        var contacts = store.query('contact', {name: this.get('name')});
        this.set('contacts', contacts);
    },

    dropdown: function() {
        this.update();
        Foundation.libs.dropdown.open(this.$('#' + this.get('dropId')), this.$('#' + this.get('type')));
    }.observes('name'),

    dropId: Ember.computed('type', function() {
        return this.get('type') + 'drop';
    }),

    actions: {
        add: function() {
            this.$('#add' + this.get('type')).foundation('reveal', 'open');
            this.set('contactAddress', '');
            this.set('contactZipcode', '');
            this.set('contactCity', '');
            this.set('contactPhone', '');
            this.set('contactPortable', '');
            this.set('contactEmail', '');
        },

        selector: function(name) {
            this.set('name', name);
        },

        create: function() {
            var self = this;
            var store = this.get('store');
            var contact = store.createRecord('contact', {
                name: this.get('name'),
                iscorp: this.get('contactIscorp'),
                address: this.get('contactAddress'),
                zipcode: this.get('contactZipcode'),
                city: this.get('contactCity'),
                phone: this.get('contactPhone'),
                phonePortable: this.get('contactPortable'),
                email: this.get('contactEmail')
            });

            contact.save().then(function() {
                Ember.$().foundation('reflow');
                Ember.$('#add' + self.get('type')).foundation('reveal', 'close');
                self.update();
                Ember.$("#" + self.get('type')).trigger("change");
            }, function(response) {
                self.set('error',  JSON.stringify(response));
            });
        }
    }

});
