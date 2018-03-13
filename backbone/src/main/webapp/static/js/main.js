require.config({
    paths: {
        "jquery" : "lib/jquery-3.2.1.min",
        "backbone" : "lib/backbone",
        "underscore" : "lib/underscore",
        "addContactButton" : "views/addButtonView",
        "addNewContact" : "views/NewContactView",
        "contactView" : "collections/ContactLibraryView",
        "editContact" : "views/EditContactView",
        "dust" : "lib/dust-full",
        "lodash" : "lib/lodash",
        "text" : "lib/text",
        "contactModel" : "models/contactModel",
        "contactsView" : "views/contactView",
        "confirmation" : "lib/jquery-confirm",
        "controller" : "lib/backbone.controller",
        "eventHandler" : "events/EventHandler",
        "router" : "routers/routes"
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

require(['addContactButton', 'contactView'], function () {
    var Router = require('router');
    var rout = new Router;
    var fragment = Backbone.history.getFragment();
    rout.navigate(fragment, {trigger: true});
    Backbone.history.loadUrl(fragment);
});

