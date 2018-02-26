define(function (require) {

    require('dust');
    var Backbone = require('backbone');
    var contactModel = require('contactModel');
    var ContactView = require('contactsView');
    var source = require('text!../templates/contacts.dust');
    var eventHandler = require('eventHandler');

    var contacts = [
        {number: "1", name:"John", phone: "800900", group: "Job"},
        {number: "2", name:"Oleg", phone: "980980", group: "Friend"},
        {number: "3", name:"Mila", phone: "43434343", group: "Family"},
        {number: "4", name:"Lilia", phone: "5555555", group: "School"},
        {number: "5", name:"Kate", phone: "5454545", group: "University"},
        {number: "6", name:"Melani", phone: "44444444", group: "Job"}
    ];

    var Library = Backbone.Collection.extend({
        model: contactModel,
        template: source
    });

    var LibraryView = Backbone.View.extend({
        el:$("#app"),

        initialize: function(){
          var compiled = dust.compile(source, "library");
          dust.loadSource(compiled);

          this.collection = new Library(contacts);
          this.render();

          this.collection.on("remove", this.removeContact, this);
          this.collection.on("add", this.addContact, this);
        },

        events: {
            "click .addButton": "addContact"
        },

        render: function() {
          $("#app").empty();
            var that = this;
            _.forEach(that.collection.models, function(file) {
                console.log(file);
                that.renderContact(file)});

            return this;
        },

        renderContact: function(item) {
            var contactView = new ContactView({
                model: item
            });

            this.$el.append(contactView.render().el);
        },

        removeContact: function(removedContact){
            this.$("#li" + removedContact.number).remove();
        }
    });

    return LibraryView;
});
