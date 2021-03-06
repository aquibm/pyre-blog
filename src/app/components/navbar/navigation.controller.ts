import { ISettingsService } from '../../integration/settings.service';
import { IUserService } from '../../user/user.service';

export class NavigationController {
	'use strict';

	public blogSettings: AngularFireObject;

	/* @ngInject */
	constructor(private $mdSidenav: angular.material.ISidenavService, settingsService: ISettingsService,
		private userService: IUserService, private $state: any) {
		this.blogSettings = settingsService.getSettings();
	}

	public toggleSidenav(): void {
		this.$mdSidenav('pyreSidenav').toggle();
	}

	public getAvatarUri(): string {
		var authData = this.userService.getAuthData();
		return authData.password.profileImageURL;
	}

	public getEmail(): string {
		var authData = this.userService.getAuthData();
		return authData.password.email;
	}

	public isUserLoggedIn(): boolean {
		return this.userService.isLoggedIn();
	}

	public navigateToState(state: string): void {
		this.$state.go(state);
	}

	public isCurrentState(stateName: string): boolean {
		return this.$state.current.name === stateName;
	}

	public logout(): void {
		this.userService.unauthenticate();
		this.$state.go('main.home');
	}
}