define(['backbone', 'dust'], function (Backbone) {
    var source = document.getElementById('contactTemplate').innerText;
    var compiled = dust.compile(source, "intro");
    dust.loadSource(compiled);

    var contacts = [{name:"John", phone: "800900", group: "Job"},
        {name:"Oleg", phone: "980980", group: "Friend"},
        {name:"Mila", phone: "43434343", group: "Family"},
        {name:"Lilia", phone: "5555555", group: "School"}];

    var Book = Backbone.Model.extend({
        defaults:{
            coverImage:"../../img/man1.jpg",
            name:"Unnamed",
            phone: "without telephone",
            group: "without group"
        }
    });

    var Library = Backbone.Collection.extend({
        model: Book
    });

    var ContactView = Backbone.View.extend({
    template: $("#bookTemplate").html(),
    tagName:"div",
    className:"contactContainer",
    initialize: function () {
            this.render();
        },
    render: function(){
        this.$el.html(this.model);
        return this;
    }
    });

    var LibraryView = Backbone.View.extend({
        el:$("#app"),

        initialize:function(){
            this.collection = new Library(contacts);
            this.render();
        },

        render: function() {
            var that = this;
            _.forEach(this.collection.models, function(file) {
                console.log(file);
                dust.render("intro", file.toJSON(), function(err, out) {
                that.renderContact(out);
            }.bind(this))});

            return this;
        },

        renderContact: function(item){
            var contactView = new ContactView({
                model: item
            });
            this.$el.append(contactView.render().el);
        }
    });

    var libraryView = new LibraryView();

    return libraryView;
});
