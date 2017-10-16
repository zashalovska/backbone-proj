define(['backbone', 'dust'], function (Backbone) {
    var source = document.getElementById('contactTemplate').innerText;
    var compiled = dust.compile(source, "intro");
    dust.loadSource(compiled);

    var contacts = [{name:"John", phone: "800900", group: "Job"},
        {name:"Oleg", phone: "980980", group: "Friend"},
        {name:"Mila", phone: "43434343", group: "Family"},
        {name:"Lilia", phone: "5555555", group: "School"},
        {name:"Kate", phone: "5454545", group: "University"},
        {name:"Melani", phone: "44444444", group: "Job"}
    ];

    var Contact = Backbone.Model.extend({
        defaults:{
            coverImage:"../../img/man1.jpg",
            name:"Unnamed",
            phone: "without telephone",
            group: "without group"
        }
    });

    var Library = Backbone.Collection.extend({
        model: Contact
    });

    var ContactView = Backbone.View.extend({
    tagName:"div",
    className:"contactContainer",
    initialize: function () {
            this.render();
        },
    render: function() {
        dust.render("intro", this.model.toJSON(), function(err, out) {
            this.$el.html(out);
        }.bind(this));

        return this;
    },

    events: {
        "click .deleteButton": "deleteContact"
    },

    deleteContact:function () {
         //Delete model
         this.model.destroy();

         //Delete view
         this.remove();
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
                that.renderContact(file)});

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

    return ContactView;
});
