define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {

	'use strict';

	var DashView = Backbone.View.extend({

		initialize: function() {

		},

		render: function() {
			var html = '<h3>Dashboard page</h3>';
			this.$el.html(html);
			return this;
		}

	});

	return DashView;
});