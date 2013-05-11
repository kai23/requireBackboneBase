// Filename: models/home
define([
  'underscore',
  'backbone'
], function(_, Backbone){
  var HomeModel = Backbone.Model.extend({
		urlRoot: "/home"
	});
  // Return the model for the module
  return new HomeModel;
});