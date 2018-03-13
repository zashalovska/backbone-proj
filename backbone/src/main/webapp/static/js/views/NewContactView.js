define([
    'backbone',
    'jquery',
    'text!../templates/addContact.dust',
    'router'
], function (backbone, Jquery, template, router) {

    return AddContactView =  Backbone.View.extend({

        tagName:"newContact",
        className:"addNewContact",

        events: {
            "click .addContact": "addContact",
            "click .addButton": "addContact",
            "click .backToMain": "returnToMainPage",
            "click .add": "addContacts"
        },

        initialize: function () {

        },

        render: function() {
            var source = template;
            var compiled = dust.compile(source, "intro");
            dust.loadSource(compiled);

            dust.render("intro", {}, function(err, out) {
                this.$el.html(out);
            }.bind(this));

            return this;
        },

        addContacts: function () {

           var contact = new ContactView({
                model: contact
            });

            this.$el.append(contact.render().$el);
        },

        add: function(contact){
            var addedContactView = new ContactView({
                model: contact
            });

          Backbone.Validation.bind(contact);
        }
    });

});