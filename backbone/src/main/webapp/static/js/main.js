require.config({
    paths: {
        "jquery" : "lib/jquery-3.2.1.min",
        "backbone" : "lib/backbone",
        "underscore" : "lib/underscore",
        "contactView" : "views/ContactLibraryView",
        "addContactButton" : "views/addNewContactView",
        "dust" : "lib/dust-full",
        "lodash" : "lib/lodash",
        "text" : "lib/text",
        "contactModel" : "models/contactModel",
        "contactsView" : "views/contactView",
        "confirmation" : "lib/jquery-confirm",
        "controller" : "lib/backbone.controller",
        "contactController" : "controllers/contactController",
    },

  shim: {
    'backbone': {
      debts: [
      'underscore',
      'jquery',
      'dust'
      ],
      exports: 'Backbone'
    },
    'dust': {
      exports: 'Dust'
    },
    'confirmation': {
          debts: [
              'jquery'
          ],
          exports: 'Confirmation'
      },
    'controller': {
          debts: ['underscore', 'backbone']
      }
  }
});

require(['addContactButton'], function (addNewContactView) {
    new addNewContactView;
});

require(['contactView'], function (ContactLibraryView) {
    new ContactLibraryView;
});

