import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  iscorp: DS.attr('boolean'),
  address: DS.attr('string'),
  zipcode: DS.attr('string'),
  city: DS.attr('string'),
  phone: DS.attr('string'),
  phonePortable: DS.attr('string'),
  email: DS.attr('string')
});
