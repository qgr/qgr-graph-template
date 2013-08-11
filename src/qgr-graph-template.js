define( [
    'jquery',
    'underscore',
    'backbone',
    'handlebars'
    ],
function ($, _, Backbone, Handlebars) {


var TemplateView = Backbone.View.extend({
    // Very simple View to render the supplied template.

  // Subclasses define template here.
  //template: Handlebars.compile(template),

  initialize: function(options) {

    this.raw_data = this.options.raw_data;
    this.render();
  },

  update: function(raw_data) {

    this.raw_data = raw_data;
    this.render();
  },

  render: function() {
    this.$el.html(this.template({
      rows: this.raw_data
    });
    return this;
  }

});

return TemplateView

});

