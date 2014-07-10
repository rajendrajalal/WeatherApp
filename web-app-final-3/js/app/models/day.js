define([
	'backbone',
], function (Backbone) {

	'use strict';

	var DayModel = Backbone.Model.extend({
		defaults: {
			'weekday': '',
			'highCelsius': null,
			'lowCelsius': null,
			'highFahrenheit': null,
			'lowFahrenheit': null,
			'icon_url': '',
			'conditions': ''
		},
		parse: function (data) {
			var map = {
				'weekday': data.date.weekday,
				'highCelsius': data.high.celsius,
				'lowCelsius': data.low.celsius,
				'highFahrenheit': data.high.fahrenheit,
				'lowFahrenheit': data.low.fahrenheit,
				'icon_url': data.icon_url,
				'conditions': data.conditions
			};
			return map;
		}
	});

	return DayModel;
});