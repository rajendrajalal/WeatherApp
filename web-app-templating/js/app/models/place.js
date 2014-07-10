define([
	'backbone',
], function (Backbone) {

	'use strict';

	var PlaceModel = Backbone.Model.extend({
		defaults: {
			'countryCode': '',
			'name': '',
			'favourite': false
		}
	});

	return PlaceModel;
});