define([
  'jquery',
  'underscore',
  'backbone',
  'models/home',
  'text!views/home/TIndex.html'], function($, _, Backbone, HomeModel, HomeTemplate) {
  var HomeView = Backbone.View.extend({
    el: "#page",
    events: {
      
    },

    initialize: function() {
      this.render();
    },
    render: function() {
      var template = _.template(HomeTemplate, {});
      this.$el.html(template);
    }
  });
  return HomeView;
});