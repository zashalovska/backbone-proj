define(['backbone'], function (Backbone) {

    return Backbone.Model.extend({
        defaults:{
            coverImage:"../../img/man1.jpg",
            name:"Unnamed",
            phone: "without telephone",
            group: "without group"
        }
    });
});