define(function (require) {
    var Backbone = require ('backbone');
    var router = require ('router');

    var AddedContactView = Backbone.View.extend({
        el: $("#addButtons"),

        initialize: function () {
            this.renderAddButton();
        },

        renderAddButton: function () {
            $("#addButtons").html("<button class='addButton' id='button-bar'>+ Add new Contact </button>");
        },

        events: {
            "click .addButton": "addNewContact",
            "click .backToMain": "returnToMainPage"
        },

        addNewContact: function () {
            rout.navigate("addContact", {trigger: true});
            return this;
        },

        returnToMainPage: function () {
            rout.navigate("", {trigger: true});
            return this;
        }
    });

    var rout = new router();

    return AddedContactView;
});