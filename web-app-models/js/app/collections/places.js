define([
	'backbone',
	'app/models/place'
], function (Backbone, PlaceModel) {

	'use strict';

	var PlacesCollection = Backbone.Collection.extend({
		model: PlaceModel
	});

	return PlacesCollection;
});