export class NavigationController {

	private links = ['Home', 'About', 'Contact'];

	/* @ngInject */
	constructor(private $mdSidenav: any) { }

	public toggleSideNav(): void {
		this.$mdSidenav('left').toggle();
	}
}