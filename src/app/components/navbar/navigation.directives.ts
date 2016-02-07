export function pyreSidenav() {
	return {
		restrict: 'E',
		templateUrl: 'app/components/navbar/sidenav.html',
		controller: 'NavigationController',
		controllerAs: 'nav'
	};
}

export function pyreNavbar() {
	return {
		restrict: 'E',
		templateUrl: 'app/components/navbar/navbar.html',
		controller: 'NavigationController',
		controllerAs: 'nav'
	};
}