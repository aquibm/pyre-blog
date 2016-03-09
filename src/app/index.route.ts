import { ISettingsService } from './integration/settings.service';
import { IFirebaseGatewayService } from './integration/firebase.gateway.service';

export interface IExtendedState extends angular.ui.IState {
	authenticate?: boolean;
}

/* @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
	$stateProvider
		.state('main', <IExtendedState> {
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'vm',

			resolve: {
				/* @ngInject */
				settings: (settingsService: ISettingsService, nanobar: any) => {
					return settingsService.primeSettings().then(() => {
						nanobar.go(40);
					});
				}
			}
		})

		.state('main.home', <IExtendedState> {
			url: '/',
			templateUrl: 'app/home/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		})

		.state('main.about', <IExtendedState> {
			url: '/about',
			templateUrl: 'app/about/about.html',
			controller: 'AboutController',
			controllerAs: 'vm',

			resolve: {
				/* @ngInject */
				aboutData: (firebaseGatewayService: IFirebaseGatewayService, nanobar: any) => {
					return firebaseGatewayService.getSyncedObject('aboutPage').$loaded((data: any) => {
						nanobar.go(70);
						return data;
					});
				}
			}
		})

		.state('main.login', <IExtendedState> {
			url: '/login',
			templateUrl: 'app/user/login.html',
			controller: 'LoginController',
			controllerAs: 'vm'
		})

		.state('main.newPost', <IExtendedState> {
			url: '/posts/new',
			templateUrl: 'app/admin/posts/new-post.html',
			authenticate: true
		})

		.state('main.posts', <IExtendedState> {
			url: '/posts',
			templateUrl: 'app/admin/posts/posts.html',
			authenticate: true
		})

		.state('main.blogSettings', <IExtendedState> {
			url: '/settings/blog',
			templateUrl: 'app/admin/settings/blog-settings.html',
			controller: 'BlogSettingsController',
			controllerAs: 'ctrl',
			authenticate: true
		})

		.state('main.navSettings', <IExtendedState> {
			url: '/settings/navbar',
			templateUrl: 'app/admin/settings/nav-settings.html',
			authenticate: true
		})

		.state('main.userSettings', <IExtendedState> {
			url: '/settings/user',
			templateUrl: 'app/admin/settings/user-settings.html',
			authenticate: true
		});

	$urlRouterProvider.otherwise('/');
}
