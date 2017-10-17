define([
    'backbone',
    'dust',
    'contactModel',
    'contactsView'
], function (Backbone, Dust, contactModel, ContactView) {
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

    var Library = Backbone.Collection.extend({
        model: contactModel
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
