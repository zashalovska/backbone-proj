define(['backbone'], function (Backbone) {

    return Backbone.View.extend({
        tagName:"div",
        className:"contactContainer",
        render: function() {
            dust.render("intro", this.model.toJSON(), function(err, out) {
                this.$el.html(out);
            }.bind(this));

            return this;
        },

        events: {
            "click .deleteBut": "deleteContact"
        },

        deleteContact:function () {
            //Delete model
            this.model.destroy();

            //Delete view
            this.remove();
        }
    });
});