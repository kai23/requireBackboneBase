define([
  'jquery',
  'underscore',
  'backbone',
  'jqueryui',
  'router' // Request router.js
], function($, _, Backbone, jq, Router){
  var initialize = function(){
    Router.initialize();
  };
  return {
    initialize: initialize
  };
});