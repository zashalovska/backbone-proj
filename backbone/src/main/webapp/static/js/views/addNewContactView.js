define([
    'backbone',
    'dust',
    'jquery',
    'router'], function (Backbone, Dust, j, router) {

    var AddedContactView =  Backbone.View.extend({

        initialize: function () {
            this.renderAddButton();
        },

        renderButton: function() {
            var source = "<button class='addButton'>+ Add new Contact </button>";
            var compiled = dust.compile(source, "intro");
            dust.loadSource(compiled);

            dust.render("intro", {}, function(err, out) {
                this.$el.html(out);
            }.bind(this));

            return this;
        },

        renderAddButton: function () {
            $("#addButtons").html(this.renderButton().el);
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