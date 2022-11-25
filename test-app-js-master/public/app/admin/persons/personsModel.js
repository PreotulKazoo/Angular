angular.module('taxes-app').factory('personsModel', $resource => {
	return {
		simple: $resource('/api/persons', {}, {
			update: {method: 'PUT'}
		}),
		byId: $resource('/api/persons/:id'),
	};
});
