define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/index'
  ], function($, _, Backbone, HomeView) {

  var Router = Backbone.Router.extend({
    routes: {
      '': function() {
        var view = new HomeView();
      }
    }
  });

  var initialize = function() {
    var router = new Router();
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});