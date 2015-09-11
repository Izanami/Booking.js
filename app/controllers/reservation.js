import Ember from 'ember';

export default Ember.Controller.extend({
    isAllDay: true,
    today:  new Date().toJSON().split('T')[0],

    nbDay: function() {
        var begin = this.get('begin');
        var end = this.get('end');
        if(begin === undefined || end === undefined)
            {return ""};

        begin = new Date(begin);
        begin.setHours(0);
        begin.setMinutes(0);
        begin = begin.getTime() / 86400000;

        end = new Date(end);
        end.setHours(23);
        end.setMinutes(59);
        end = end.getTime() / 86400000;

        var diff =  Math.ceil(end - begin);

        if(diff < 1)
            {return 1;}
        else
            {return diff;}
    }.property('begin', 'end'),

    changeBegin: function() {
        this.set('end',  this.get('begin'));
        //Ember.$('input[type="date"]').trigger('change');
        //console.log(this.get('begin'));
    }.observes('begin'),

    didUser: function() {
        var self = this;
        this.store.query('user', {email: this.get('email')}).then(function(results) { // Search user within email
            if(results.get('length') > 0) { // If found user
                self.store.query('user', {current: "true"}).then(function(results) { // Get current user
                    var current_user = results.get('firstObject');
                    if (current_user !== undefined) { // If auth
                        if ( (current_user.get('email') === self.get('email')) || (current_user.get('autorization') === 1)) { // If same user or admin
                            self.set('setPassword', false); // Hide input password
                        }
                        else { self.set('setPassword', true); self.set('password', ''); } // Else show input
                    }
                    else { self.set('setPassword', true); self.set('password', ''); } // Else show input
                });
            }
            else { self.set('setPassword', false); }
        });
    }.observes('email')
});
