define(['backbone', 'jquery'], function (Backbone) {
    var source = "+ Add new Contact";
    var compiled = dust.compile(source, "intro");
    dust.loadSource(compiled);

    var ContactButtonModel = Backbone.Model.extend({
    });

    var AddedContactView =  Backbone.View.extend({
        tagName:"button",
        className:"addButton",
        id: "addButton",

        render: function() {
            dust.render("intro", this.model.toJSON(), function(err, out) {
                this.$el.html(out);
            }.bind(this));

            return this;
        },

        events: {
            "click .addButton": "redirectNewContactForm"
        },

        redirectNewContactForm: function () {
            console.log("was redirected");
        }

    });

    var contactButton = new ContactButtonModel();

    var addContactView = new AddedContactView({
        model: contactButton
    });

    $("#addButtons").html(addContactView.render().el);

    return AddedContactView;
});