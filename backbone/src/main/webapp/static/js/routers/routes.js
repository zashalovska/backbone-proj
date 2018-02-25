define([
    'backbone',
    'jquery',
    'addNewContact'
], function (Backbone) {

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

        }
    });

    Backbone.history.start();

    return AppRouter;
});