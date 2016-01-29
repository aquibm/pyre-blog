export class NavigationController {
	'use strict';

	/* @ngInject */
	constructor(private $mdSidenav: any) { }

	public toggleSidenav(): void {
		this.$mdSidenav('pyreSidenav').toggle();
	}
}