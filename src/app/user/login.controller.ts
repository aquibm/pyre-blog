import { IUserService, ICredentials } from './user.service';

export class LoginController {
	'use strict';

	public email: string;
	public password: string;

	/* @ngInject */
	constructor(private userService: IUserService, private toastr: angular.toastr.IToastrService,
		_: _.LoDashStatic) {
		this.clearCredentials();
	}

	public login(): void {
		if(_.isEmpty(this.email) || _.isEmpty(this.password)) {
			this.toastr.error('Please enter a valid email and password.');
			return;
		}

		var credentials: ICredentials = {
			email: this.email,
			password: this.password
		};

		this.userService.authenticate(credentials).then((authData: any) => {

		}).catch((error: Error) => {
			this.toastr.error(error.message);
		});
	}

	private clearCredentials(): void {
		this.email = '';
		this.password = '';
	}
}