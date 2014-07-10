define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {

	'use strict';

	var PlaceView = Backbone.View.extend({

		initialize: function() {

		},

		place: '',

		render: function() {
			var html = '<h3>Weather for: '+this.place+'</h3>';
			this.$el.html(html);
			return this;
		}

	});

	return PlaceView;
});