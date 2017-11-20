define([
    'backbone'
], function (Backbone){
    var bus = _.extend({}, Backbone.Events);
    return bus;
});