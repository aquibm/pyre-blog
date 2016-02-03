import { ISettingsService } from './integration/settings.service';

/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
	$stateProvider
		.state('main', {
			abstract: true,
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'vm',

			/* @ngInject */
			resolve: (settingsService: ISettingsService) => {
				return settingsService.primeSettings();
			}
		})

		.state('main.home', {
			url: '/',
			templateUrl: 'app/home/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		})

		.state('main.login', {
			url: '/login',
			templateUrl: 'app/user/login.html',
			controller: 'LoginController',
			controllerAs: 'vm'
		});

	$urlRouterProvider.otherwise('/');
}
