export class NavigationController {
	'use strict';

	/* @ngInject */
	constructor(private $mdSidenav: angular.material.ISidenavService) { }

	public toggleSidenav(): void {
		this.$mdSidenav('pyreSidenav').toggle();
	}
}