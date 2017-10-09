require.config({
    paths: {
        "jquery" : "lib/jquery-3.2.1.min",
        "backbone" : "lib/backbone",
        "underscore" : "lib/underscore",
        "contactView" : "views/contact",
        "dust" : "lib/dust"
    }
});

require(['contactView'], function (ContactView) {
    new ContactView;
});

define.amd.dust = true;
require(["lib/dust"], function(dust) {

});
