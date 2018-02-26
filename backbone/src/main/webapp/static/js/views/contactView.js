define(['backbone', 'confirmation', 'router'], function (Backbone, conf, router) {

    return Backbone.View.extend({
        tagName: "div",
        className: "contactContainer",

        initialize: function () {

        },

        render: function () {

            dust.render("library", this.model.toJSON(), function (err, out) {
                this.$el.html(out);
            }.bind(this));

            return this;
        },

        events: {
            "click .deleteButton": "conf",
            "click .confirm": "deleteContact",
            "click .editButton": "editContact"
        },

        deleteContact: function () {
            //Delete model
            this.model.destroy();

            //Delete view
            this.remove();
        },

        conf: function () {
            var that = this;
            $.confirm({
                title: 'Delete Confirmation',
                content: 'Do you really want to delete ' + that.model.get('name') + '?',
                draggable: true,
                closeIcon: true,
                buttons: {
                    delete: function () {
                        that.deleteContact();
                    },
                    cancel: function () {

                    }
                }
            });
        },

        editContact: function () {
            var rout = new router();
            rout.navigate("editContact/" + this.model.cid, {trigger: true});
            return this;
        }
    });

});