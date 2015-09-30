import Ember from 'ember';

export default Ember.Component.extend({
    /* Set default value */
    foundContact: false,
    name: '',
    isExists: false,
    contact: {},


    validator: function () {
        var self = this;
        var elts = this.$(".name")[0];
        var name = this.get('name');
        var found = false;

        if(elts === undefined)
            {return true;}

        this.get('contacts').forEach(function(item) {
            if(item.get('name') === name){
                found = true;
                self.set('contact', item);
                return true;
            }
        });

        if(found)
            {elts.setCustomValidity("");}
        else {
            self.set('contact', {});
            elts.setCustomValidity("Le contact n'existes pas");
        }

        this.set('isExists', found);
        return false;
    }.observes('name'),

    didInsertElement: function() {
        var store = this.get('store');
        if(store === undefined)
            {return false;}
        var contacts = store.query('contact', {name: this.get('name')});
        this.set('contacts', contacts);
    },

    Id: Ember.computed(function() {
        return this.elementId + "child";
    }),

    dropId: Ember.computed(function() {
        return this.elementId + 'drop';
    }),

    actions: {
    }
});
