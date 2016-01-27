interface INavigationLink {
	name: string;
	ref: string;
	icon?: string;
	external?: boolean;
	target?: string;
}

export class NavigationController {
	public links: Array<INavigationLink>;

	/* @ngInject */
	constructor(private $mdSidenav: any) {
		this.links = [
			{
				name: 'Home',
				ref: 'home'
			},

			{
				name: 'About',
				ref: 'about'
			},

			{
				name: 'Github',
				ref: 'https://github.com/aquibm/pyre-blog',
				external: true,
				target: '_blank'
			}
		];
	}

	public toggleSideNav(): void {
		this.$mdSidenav('left').toggle();
	}
}