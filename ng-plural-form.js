angular.module('pluralForm', []).filter('pluralForm', function() {
	return function(number, forms) {
		number = Math.abs(number);
		if (number % 10 == 1 && number % 100 != 11) {
			return forms[0];
		} else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
			return forms[1];
		} else {
			return forms[2];
		}
	};
});
