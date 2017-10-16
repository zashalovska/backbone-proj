define(['backbone'], function (Backbone) {

    return Backbone.View.extend({
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
});