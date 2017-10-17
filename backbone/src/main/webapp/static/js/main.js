require.config({
    paths: {
        "jquery" : "lib/jquery-3.2.1.min",
        "backbone" : "lib/backbone",
        "underscore" : "lib/underscore",
        "contactView" : "views/ContactLibraryView",
        "dust" : "lib/dust-full",
        "lodash" : "lib/lodash",
        "text" : "lib/text",
        "contactModel" : "models/contactModel",
        "contactsView" : "views/contactView"
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
    }
  }
});

require(['contactView'], function (ContactLibraryView) {
    new ContactLibraryView;
});

