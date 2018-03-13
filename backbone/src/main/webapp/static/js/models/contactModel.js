define(['backbone', 'underscore', 'validation'], function (Backbone, $, validation) {

    return Backbone.Model.extend({

        defaults:{
            coverImage:"../../img/man1.jpg",
            name:"Unnamed",
            phone: "without telephone",
            group: "without group"
        },

        validation: function () {
          name: {
            required: true
          }
        }
    });
});