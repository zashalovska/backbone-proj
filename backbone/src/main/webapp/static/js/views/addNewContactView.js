define([
    'backbone',
    'dust',
    'jquery',
    'router'], function (Backbone, Dust, j, router) {

    var AddedContactView =  Backbone.View.extend({
        el:$("#addButtons"),

        initialize: function () {
            this.renderAddButton();
        },

        renderAddButton: function () {
            $("#addButtons").html("<button class='addButton'>+ Add new Contact </button>");
        },

        events: {
            "click .addButton": "addNContact"
        },

        addNContact: function () {
            console.log("ffff");
            rout.navigate("addContact", {trigger: true})
            return this;
        }
    });

    var rout = new router();

    return AddedContactView;
});