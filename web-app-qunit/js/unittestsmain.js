require.config({

	paths: {
		'jquery': 'libs/jquery-1.9.1',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap',
		'QUnit': 'libs/qunit-1.12.0'
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
		},
		'QUnit': {
			exports: 'QUnit',
			init: function() {
			    QUnit.config.autoload = false;
			    QUnit.config.autostart = false;
			}
        } 
	}
});

require(
    ['QUnit', 'tests/utilsTest'],
    function(QUnit, utilsTest) {
        // run the tests.
        utilsTest.run();
        // start QUnit.
        QUnit.load();
        QUnit.start();
    }
);