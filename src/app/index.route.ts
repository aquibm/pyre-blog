import { ISettingsService } from './integration/settings.service';

export interface IExtendedState extends angular.ui.IState {
	authenticate?: boolean;
}

/* @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
	$stateProvider
		.state('main', <IExtendedState>{
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'vm',

			resolve: {
				/* @ngInject */
				settings: (settingsService: ISettingsService) => {
					return settingsService.primeSettings();
				}
			}
		})

		.state('main.home', <IExtendedState>{
			url: '/',
			templateUrl: 'app/home/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		})

		.state('main.about', <IExtendedState> {
			url: '/about',
			templateUrl: 'app/about/about.html'
		})

		.state('main.login', <IExtendedState>{
			url: '/login',
			templateUrl: 'app/user/login.html',
			controller: 'LoginController',
			controllerAs: 'vm'
		})

		.state('main.dashboard', <IExtendedState>{
			url: '/dashboard',
			templateUrl: 'app/dashboard/dashboard.html',
			authenticate: true
		});

	$urlRouterProvider.otherwise('/');
}
