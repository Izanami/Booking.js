import DS from 'ember-data';

export default DS.Model.extend({
  isPublic: DS.attr('boolean'),
  begin: DS.attr('date'),
  end: DS.attr('date'),
  size: DS.attr('number'),
  motif: DS.attr('string'),
  assurance: DS.attr('string'),
  assuranceNb: DS.attr('string'),
  assuranceDate: DS.attr('date')
});
