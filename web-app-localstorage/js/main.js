require.config({

	paths: {
		'jquery': 'libs/jquery-1.10.1.min',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap',
		'backbone.localStorage': 'libs/backbone.localStorage'
	},

	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: [
				'jquery'
			]
		}
	}

});

require([
	'backbone',
	'app/app'
], function (Backbone, App) {
	'use strict';

	App.initialize();

});







