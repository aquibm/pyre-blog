/// <reference path="../../.tmp/typings/tsd.d.ts" />

// Config
import { config } from './index.config';
import { configureMarkdown } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// Services
import { SettingsService } from './integration/settings.service';
import { FirebaseGatewayService } from './integration/firebase.gateway.service';
import { UserService } from './user/user.service';

// Controllers
import { MainController } from './main/main.controller';
import { NavigationController } from './components/navbar/navigation.controller';
import { HomeController } from './home/home.controller';
import { LoginController } from './user/login.controller';
import { AboutController } from './about/about.controller';

// Directives
import { pyreSidenav } from './components/navbar/navigation.directives';
import { pyreNavbar } from './components/navbar/navigation.directives';
import { pyreOnReturnPressed } from './user/pyre.user.directives';
import { pyreFocusOn } from './user/pyre.user.directives';

// Libraries
declare var moment: moment.MomentStatic;
declare var _: _.LoDashStatic;
declare var Firebase;
declare var hljs;

module pyreBlog {
	'use strict';

	var dependencies = [
		'ngAnimate',
		'ngCookies',
		'ngTouch',
		'ngSanitize',
		'ngMessages',
		'ngAria',
		'ui.router',
		'ngMaterial',
		'toastr',
		'firebase',
		'hc.marked'
	];

	angular.module('pyreBlog', dependencies)
		// Constants
		.constant('moment', moment)
		.constant('Firebase', Firebase)
		.constant('_', _)
		.constant('hljs', hljs)

		// Config
		.config(routerConfig)
		.config(config)
		.config(configureMarkdown)
		.run(runBlock)

		// Services
		.service('settingsService', SettingsService)
		.service('firebaseGatewayService', FirebaseGatewayService)
		.service('userService', UserService)

		// Controllers
		.controller('MainController', MainController)
		.controller('NavigationController', NavigationController)
		.controller('HomeController', HomeController)
		.controller('LoginController', LoginController)
		.controller('AboutController', AboutController)

		// Directives
		.directive('pyreSidenav', pyreSidenav)
		.directive('pyreNavbar', pyreNavbar)
		.directive('pyreOnReturnPressed', pyreOnReturnPressed)
		.directive('pyreFocusOn', pyreFocusOn);
}
