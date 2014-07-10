define([
	'backbone',
], function (Backbone) {

	'use strict';

	var PlaceModel = Backbone.Model.extend({
		defaults: {
			'countryCode': '',
			'name': ''
		}
	});

	return PlaceModel;
});