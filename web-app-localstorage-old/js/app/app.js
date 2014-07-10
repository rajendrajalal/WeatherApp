define([
	'app/views/app',
	'app/routers/router',
	'app/models/app',
	'app/collections/days',
	'app/collections/places'
], function (AppView, Router, AppModel, DaysCollection, PlacesCollection) {
	'use strict';

	var initialize = function () {
		var appModel = new AppModel({id: 1});

		var appView = new AppView({model: appModel});
		$('body').append(appView.render().el);

		var router = new Router(appView);
		Backbone.history.start();

		/*var daysCollection = new DaysCollection([], {
			url: 'http://api.wunderground.com/api/0eb28873be3db900/forecast/q/IT/Magenta.json'
		});

		daysCollection.fetch({
			success: function (collection, response, options) {
				console.log(collection, response);
			},
			error: function (collection, response, options) {
				console.log('error');
			}
		});*/

		appModel.fetch();

		var placesCollection = new PlacesCollection([]);
		placesCollection.fetch();

		window.debug = {
			places: placesCollection,
			settings: appModel
		}
	};

	return {
		initialize: initialize
	}
});