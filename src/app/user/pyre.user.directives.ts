'use strict';

/* @ngInject */
export function pyreOnReturnPressed($timeout: ng.ITimeoutService) {
	return {
		restrict: 'A',
		link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: any) => {
			element.bind('keydown keypress', (event: any) => {
				if (event.which === 13) {
					$timeout(() => {
						scope.$eval(attrs.pyreOnReturnPressed, { 'event': event });
					});

					event.preventDefault();
				}
			});
		}
	};
}

/* @ngInject */
export function pyreFocusOn($timeout: angular.ITimeoutService) {
	return {
		restrict: 'A',
		link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: any) => {
			scope.$watch(attrs.pyreFocusOn, (newValue: boolean, oldValue: boolean) => {
				if (newValue !== oldValue && newValue === true) {
					$timeout(() => {
						element[0].focus();
					});
				}
			});
		}
	};
}