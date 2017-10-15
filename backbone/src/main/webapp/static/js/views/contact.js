define(['backbone', 'dust'], function (Backbone) {
    var compiled = dust.compile("Hello {name}!", "intro");
    dust.loadSource(compiled);

    var Contact = Backbone.View.extend({
    el: $('#app'),
    template: 'intro',
    initialize: function () {
            this.render();
        },
    render: function(){
        dust.render("intro",{name: "Fred"} , function(err,out) {
        this.$el.html(out);
       }.bind(this));
        return this;
    }
    });

    return Contact;
});
