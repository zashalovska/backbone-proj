define(['backbone'], function (Backbone) {

    return Backbone.Model.extend({
        defaults:{
            coverImage:"../../img/man1.jpg",
            name:"Unnamed",
            phone: "without telephone",
            group: "without group"
        },

        validate: function (attr) {
            if (!attr.name){
                return "Please, enter the name!"
            }

            if (!attr.phone){
                return "Please, enter the phone!"
            }

            if (!attr.group){
                return "Please, enter the group!"
            }
        }


    });
});