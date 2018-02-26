define([
    'backbone',
    'jquery',
    'addNewContact',
    'require'
], function (Backbone, $, addNewContact, require) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'initMainPage',
            'contactList': "viewContactList",
            'addContact': "addNewContact",
            'addContacts/:name': 'saveContact',
            'editContact/:id': 'editContact'
        },

        addNewContact: function () {
            var contact = new AddContactView({
                el:'#app'
            });

            contact.render();

            var addButton = $('.addButton');
            addButton[0].innerText = 'Main page';
            addButton.attr("class", "backToMain");
        },

        saveContact: function (name) {

        },

        editContact: function (id) {
            console.log("renderEdit");
        },

        viewContactList: function () {

        },

        initMainPage: function () {
          var AddButton = require('addContactButton');
          var NewContactLibrary = require('contactView');

          var addButton = new AddButton();
          var contactLibrary = new NewContactLibrary();
        }
    });

    Backbone.history.start();

    return AppRouter;
});