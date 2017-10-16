require.config({
    paths: {
        "jquery" : "lib/jquery-3.2.1.min",
        "backbone" : "lib/backbone",
        "underscore" : "lib/underscore",
        "contactView" : "views/contact",
        "dust" : "lib/dust-full",
        "lodash" : "lib/lodash"
    },

  shim: {
    'backbone': {
      debts: [
      'underscore',
      'jquery',
      'dust'
      ],
      exports: 'Contact'
    }
  }
});

require(['contactView'], function (ContactView) {
    new ContactView;
});

