
/*define(function (require) {
  var Backbone = require('backbone');

  return Backbone.View.extend({
    template: template,
    initialize: function () {
        this.renderData()
    },
    renderData: function () {

    }

  });
});*/


define(['backbone'], function (Backbone) {
    var Contact = Backbone.View.extend({
    el: $('#app'),
        initialize: function () {
            this.render();
        },
        render: function () {
        console.log('dddd');
            this.$el.html('<h1>Yey</h1>')
        }
    });

    return Contact;
});
