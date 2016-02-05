import { ISettingsService } from '../../integration/settings.service';
import { IUserService } from '../../user/user.service';

export class NavigationController {
	'use strict';

	public blogSettings: AngularFireObject;

	/* @ngInject */
	constructor(private $mdSidenav: angular.material.ISidenavService, settingsService: ISettingsService, private userService: IUserService,
		private $state: any) {
		this.blogSettings = settingsService.getSettings();
	}

	public toggleSidenav(): void {
		this.$mdSidenav('pyreSidenav').toggle();
	}

	public getAvatarUri(): string {
		var authData = this.userService.getAuthData();
		return authData.password.profileImageURL;
	}

	public isUserLoggedIn(): boolean {
		return this.userService.isLoggedIn();
	}

	public logout(): void {
		this.userService.unauthenticate();
		this.$state.go('main.home');
	}
}