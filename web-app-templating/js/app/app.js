define([
	'app/views/app',
	'app/routers/router',
	'app/models/app'
], function (AppView, Router, AppModel) {

	'use strict';


	var initialize = function () {
		var appModel = new AppModel({id:1});

		var appView = new AppView({model: appModel});
		$('body').append(appView.render().el);

		var router = new Router(appView);
		Backbone.history.start();

		appModel.fetch();

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
	};

	return {
		initialize: initialize
	}
});




