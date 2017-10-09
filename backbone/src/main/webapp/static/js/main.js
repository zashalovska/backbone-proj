require.config({
    paths: {
        "jquery" : "lib/jquery-3.2.1.min",
        "backbone" : "lib/backbone",
        "underscore" : "lib/underscore",
        "contactView" : "views/contact",
        "dust" : "lib/dust-full"
    }
});

require(['contactView'], function (ContactView) {
    new ContactView;
});

define.amd.dust = true;
require(['dust'], function (dust) {
  dust.render("");
});
