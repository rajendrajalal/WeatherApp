define([
	'underscore'
], function (_) {

	var Templates = {};

	Templates['place'] = [
		'<div class="panel panel-<% if (favourite) { print(\"primary\") } else { print(\"info\") } %>">',
			'<div class="panel-heading">',
				'<h3 class="panel-title">',
					'<%= name %> - <%= countryCode %>',
				'</h3>',
			'</div>',
			'<div class="panel-body">',
				'Panel content',
			'</div>',
		'</div>'
	].join('');

	for (var tmpl in Templates) {
	    if (Templates.hasOwnProperty(tmpl)) {
	        Templates[tmpl] = _.template(Templates[tmpl]);
	    }
	}

	return Templates;
});