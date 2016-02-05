import { IUserService, ICredentials } from './user.service';

export class LoginController {
	'use strict';

	public email: string;
	public password: string;
	public isLoading: boolean;

	/* @ngInject */
	constructor(private userService: IUserService, private toastr: angular.toastr.IToastrService, private $state: any) {
		this.isLoading = false;
		this.clearCredentials();
	}

	public login(): void {
		if(_.isEmpty(this.email) || _.isEmpty(this.password)) {
			this.toastr.error('Please enter a valid email and password.');
			return;
		}

		this.isLoading = true;

		var credentials: ICredentials = {
			email: this.email,
			password: this.password
		};

		this.userService.authenticate(credentials).then((authData: any) => {
			this.toastr.success('Logged in successfully!');
			this.clearCredentials();
			this.$state.go('main.dashboard');
		}).catch((error: Error) => {
			this.toastr.error(error.message);
		}).finally(() => {
			this.isLoading = false;
		});
	}

	private clearCredentials(): void {
		this.email = '';
		this.password = '';
	}
}