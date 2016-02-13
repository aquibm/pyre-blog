import { IUserService } from './user/user.service';

/** @ngInject */
export function runBlock($rootScope: angular.IRootScopeService, $state: any, userService: IUserService, nanobar: any) {
	$rootScope.$on('$stateChangeStart', (event: any, toState: any, toParams: any, fromState: any, fromParams: any) => {
		if (toState.authenticate && !userService.isLoggedIn()) {
			$state.go('main.login');
			event.preventDefault();
		}

		if (toState.name === 'main.login' && userService.isLoggedIn()) {
			$state.go('main.dashboard');
			event.preventDefault();
		}
	});

	$rootScope.$on('$stateChangeSuccess', () => {
		nanobar.go(100);
	});

	$rootScope.$on('$stateChangeError', () => {
		nanobar.go(0);
	});
}