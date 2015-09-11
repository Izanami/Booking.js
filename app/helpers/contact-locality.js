import Ember from 'ember';

export function contactLocality(params) {
    var locality = params[0].split(",");
    locality.shift();
    return locality;
}

export default Ember.Helper.helper(contactLocality);
