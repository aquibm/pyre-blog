/// <reference path="../../.tmp/typings/tsd.d.ts" />

// Config
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// Services
import { FirebaseGatewayService } from './integration/firebase.gateway.service';

// Controllers
import { NavigationController } from './components/navbar/navigation.controller';
import { HomeController } from './home/home.controller';

// Libraries
declare var moment: moment.MomentStatic;
declare var Firebase;

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
		'firebase'
	];

	angular.module('pyreBlog', dependencies)
		// Constants
		.constant('moment', moment)
		.constant('Firebase', Firebase)

		// Config
		.config(config)
		.config(routerConfig)
		.run(runBlock)

		// Services
		.service('FirebaseGatewayService', FirebaseGatewayService)

		// Controllers
		.controller('NavigationController', NavigationController)
		.controller('HomeController', HomeController);
}
