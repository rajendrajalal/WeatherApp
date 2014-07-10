define([
	'jquery',
	'underscore',
	'backbone',
	'app/collections/days',
	'app/templates'
], function ($, _, Backbone, DaysCollection, Templates) {

	'use strict';

	var DashView = Backbone.View.extend({

		template: Templates['place'],

		collection: new DaysCollection([]),

		initialize: function() {
			var html = this.template(this.model.toJSON());
			this.$el.html(html);
			this.$bodyEl = this.$('.panel-body');
		},

		render: function() {
			var that = this;

			this.collection.url = [
				'http://api.wunderground.com/api/',
				'0eb28873be3db900',
				'/forecast/q/',
				this.model.get('countryCode'),
				'/', 
				this.model.get('name'),
				'.json'
			].join('');

			this.collection.fetch({
				success: function (collection, response, options) {
					that.renderDays();
				},
				error: function (collection, response, options) {
					console.log('There was an error');
				}
			});
			return this;
		},

		renderDays: function () {
			var daysHtml = [];
			this.collection.each(function (element, index, list) {
				daysHtml.push(
					Templates['day'](element.toJSON())
				);
			});
			this.$bodyEl.html(daysHtml.join(''));
		}

	});

	return DashView;
});