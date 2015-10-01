import Ember from 'ember';

export function errorField(params) {
    var list = "<ul>";

    Ember.$.each(params[0], function(key, value) {
        list += "<li>" + Ember.Handlebars.Utils.escapeExpression(key) + " : " + Ember.Handlebars.Utils.escapeExpression(value) + "</li>";
    });

    list += "</ul>";
    return new Ember.String.htmlSafe(list);
}

export default Ember.Helper.helper(errorField);
