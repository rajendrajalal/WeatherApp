require.config({

	urlArgs: 'bust=' + (new Date()).getTime(),

	paths: {
		'jquery': 'libs/jquery-1.9.1',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap',
		'backbone.localStorage': 'libs/backbone.localStorage'
	},
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
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
		'backbone.localStorage': {
			deps: [
				'backbone'
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
	'app/app',
	'bootstrap'
], function (Backbone, App, bootstrap) {
	'use strict';

	App.initialize();

});