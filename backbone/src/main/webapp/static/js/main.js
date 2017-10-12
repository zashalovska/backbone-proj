require.config({
    paths: {
        "jquery" : "lib/jquery-3.2.1.min",
        "backbone" : "lib/backbone",
        "underscore" : "lib/underscore",
        "contactView" : "views/contact",
        "dust" : "lib/dust-full",
        "contacts" : "../templates/contacts.dust"
    },

  shim: {
    'backbone': {
      debts: [
      'underscore',
      'jquery'
      ],
      exports: 'Contact'
    }
  }
});

require(['contactView'], function (ContactView) {
    new ContactView;
});

/*define.amd.dust = true;
dust.config.amd = true;
require(['dust', 'contacts'], function (dust) {
  dust.render('contacts', { name: "Jupiter" }, function() {
    console.log("HelloDust!");
  });*/
//});
