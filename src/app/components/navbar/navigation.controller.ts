import { ISettingsService } from '../../integration/settings.service';

export class NavigationController {
	'use strict';

	public blogSettings: AngularFireObject;

	/* @ngInject */
	constructor(private $mdSidenav: angular.material.ISidenavService, settingsService: ISettingsService) {
		this.blogSettings = settingsService.getSettings();
	}

	public toggleSidenav(): void {
		this.$mdSidenav('pyreSidenav').toggle();
	}
}