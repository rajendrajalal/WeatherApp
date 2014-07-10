define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {

	'use strict';

	var AboutView = Backbone.View.extend({

		initialize: function() {

		},

		render: function() {
			var html = '<h3>About page</h3>';
			this.$el.html(html);
			return this;
		}

	});

	return AboutView;
});