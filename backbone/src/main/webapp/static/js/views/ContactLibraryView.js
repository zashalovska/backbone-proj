define([
    'backbone',
    'dust',
    'contactModel',
    'contactsView',
    'jquery',
    'confirmation',
    'text!../templates/contacts.dust'
], function (Backbone, Dust, contactModel, ContactView, Jquery, Conf, template) {
    var source = template;
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

    return LibraryView = Backbone.View.extend({
        el:$("#app"),

        initialize: function(){
            this.collection = new Library(contacts);
            this.render();

            this.collection.on("remove", this.removeContact, this);
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
        },

        removeContact: function(removedContact){
            var removedContactData = removedContact.attributes;

            _.each(removedContactData, function(val, key){
                if(removedContactData[key] === removedContact.defaults[key]){
                    delete removedContactData[key];
                }
            });

            _.each(contacts, function(contact){
                if(_.isEqual(contact, removedContactData)){
                    contacts.splice(_.indexOf(contacts, contact), 1);
                }
            });
        }
    });
});
