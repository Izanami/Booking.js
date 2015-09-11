import Ember from 'ember';

export function contactCity(params) {
    var city = params[0].split(",")[0];
    return city;
}

export default Ember.Helper.helper(contactCity);
