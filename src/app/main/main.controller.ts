export class MainController {

	public loadingFinished: boolean = false;

	/* @ngInject */
	constructor(private $state: any) {
		this.loadingFinished = true;
	}

	public isAdminPage(): boolean {
		return this.$state.current.authenticate;
	}
}