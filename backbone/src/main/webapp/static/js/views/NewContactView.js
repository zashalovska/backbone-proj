define([
    'backbone',
    'jquery',
    'text!../templates/addContact.dust'
], function (Backbone, Jquery, template) {

    return AddContactView =  Backbone.View.extend({

        tagName:"newContact",
        className:"addNewContact",

        events: {
            "click .addContact": "addContact",
            "click .addButton": "addContact"
        },

        initialize: function () {
            //this.model.on("add", this.addContacts, this);
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

        addContacts: function (contact) {
           /* var contact = new ContactView({
                model: contact
            });
            this.$el.append(contact.render().$el);*/
        },

        add: function(contact){
            var addedContactView = new ContactView({
                model: contact
            });
        }
    });

});