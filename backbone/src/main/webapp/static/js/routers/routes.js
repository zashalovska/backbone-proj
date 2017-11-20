define([
    'backbone',
    'jquery',
    'addNewContact'
], function (Backbone) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            'addContact': "addNew",
            'addContacts/:name': 'saveContact'
        },

        addNew: function () {
            console.log("render");
            var contact = new AddContactView({
                el:"#app"
            });

            contact.render();
        },

        saveContact: function (name) {

        }
    });

    Backbone.history.start();

    return AppRouter;
});