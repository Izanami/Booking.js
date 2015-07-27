import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  autorization: DS.attr('number', {defaultValue: 0})
});
