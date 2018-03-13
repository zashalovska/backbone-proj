define([
  'backbone',
  'jquery',
  'addNewContact',
  'editContact',
  'require',
  'contactModel'
], function (Backbone, $, addNewContact, EditContactView, require, ContactModel) {

  Backbone.history.start();

  var AppRouter = Backbone.Router.extend({
    routes: {
      'contactList': "viewContactList",
      'addContact': "addNewContact",
      'addContacts/:name': 'saveContact',
      'editContact/:name/:group/:phone': 'editContact',
      '*other': 'initMainPage'
    },

    addNewContact: function () {
      var contact = new AddContactView({
        el: '#app'
      });

      contact.render();

      var AddButton = require('addContactButton');
      var addButton = new AddButton();
      addButton.renderMainButton();
    },

    saveContact: function (name) {

    },

    editContact: function (name, group, phone) {
      var AddButton = require('addContactButton');
      var addButton = new AddButton();
      addButton.renderMainButton();

      var editContactModel = new ContactModel({
        phone: phone,
        name: name
      });

      var editContactView = new EditContactView({
        el: '#app',
        model: editContactModel
      });

      editContactView.render();
    },

    initMainPage: function () {
      var AddButton = require('addContactButton');
      var NewContactLibrary = require('contactView');

      var addButton = new AddButton();
      addButton.renderAddButton();
      var contactLibrary = new NewContactLibrary();
    }
  });

  return AppRouter;
});