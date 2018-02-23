define([
    'backbone',
    'dust',
    'contactModel',
    'contactsView',
    'jquery',
    'confirmation',
    'text!../templates/contacts.dust',
    'eventHandler'
], function (Backbone, Dust, contactModel, ContactView, Jquery, Conf, template, eventHandler) {
    var source = template;
    var compiled = dust.compile(source, "intro");
    dust.loadSource(compiled);

    var contacts = [
        {number: "1", name:"John", phone: "800900", group: "Job"},
        {number: "2", name:"Oleg", phone: "980980", group: "Friend"},
        {number: "3", name:"Mila", phone: "43434343", group: "Family"},
        {number: "4", name:"Lilia", phone: "5555555", group: "School"},
        {number: "5", name:"Kate", phone: "5454545", group: "University"},
        {number: "6", name:"Melani", phone: "44444444", group: "Job"}
    ];

    var Library = Backbone.Collection.extend({
        model: contactModel
    });

    var LibraryView = Backbone.View.extend({
        el:$("#app"),

        initialize: function(){
            this.collection = new Library(contacts);
            this.render();

            this.collection.on("remove", this.removeContact, this);
            this.collection.on("add", this.addContact, this);
        },

        events: {
            "click .addButton": "addContact"
        },

        render: function() {
            var that = this;
            _.forEach(that.collection.models, function(file) {
                console.log(file);
                that.renderContact(file)});

            return this;
        },

        renderContact: function(item) {
            var contactView = new ContactView({
                model: item,
                bus: eventHandler
            });
            this.$el.append(contactView.render().el);
        },

        removeContact: function(removedContact){
            this.$("#li" + removedContact.number).remove();
        }
    });

    return LibraryView;
});
