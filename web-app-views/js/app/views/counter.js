define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {

	'use strict';

	var CounterView = Backbone.View.extend({

		count: 0,

		initialize: function() {

		},

		events: {
			'click span': 'addToCounter',
			'click strong': 'removeView'
		},

		render: function() {
			var html = '<h3>This view has been <span>clicked</span> ' + this.count + ' times</h3>';
			html += '<strong>remove</strong>'
			this.$el.html(html);
			return this;
		},

		addToCounter: function () {
			this.count++;
			this.render();
		},

		removeView: function () {
			this.remove();
		}

	});

	return CounterView;
});