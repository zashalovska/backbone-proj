define(['backbone', 'jquery', 'confirmation'], function (Backbone, Jquery) {

    return Backbone.View.extend({
        tagName:"div",
        className:"contactContainer",

      initialize: function (opt) {
        this.model.on("change", this.model.render, this),
        this.bus = opt.bus;
      },

      render: function() {
        dust.render("intro", this.model.toJSON(), function(err, out) {
            this.$el.html(out);
        }.bind(this));

        return this;
      },

      events: {
          "click .deleteButton": "confirmation",
          "click .confirm": "deleteContact"
      },

        deleteContact:function () {
            //Delete model
            this.model.destroy();

            //Delete view
            this.remove();
        },

        confirmation: function () {
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
        }
    });
});