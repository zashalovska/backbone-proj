define([
  'backbone',
  'jquery',
  'text!../templates/editContact.dust',
  'router'
], function (Backbone, Jquery, template, router) {

  return EditContactView =  Backbone.View.extend({

    tagName:"editContact",
    className:"editContact",

    events: {
      "click .editContact": "addContact"
    },

    initialize: function () {

    },

    render: function() {
      var source = template;
      var compiled = dust.compile(source, "editTemplate");
      dust.loadSource(compiled);

      dust.render("editTemplate", this.model.toJSON(), function(err, out) {
        this.$el.html(out);
      }.bind(this));

      return this;
    },

    editContact: function(contact){
      var editContactView = new ContactView({
        model: contact
      });

      console.log("contact" + contact);
      editContactView.render();
    }

  });

});