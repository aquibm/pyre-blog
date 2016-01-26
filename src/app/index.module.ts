/// <reference path="../../.tmp/typings/tsd.d.ts" />

// Config
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// Services

// Controllers
import { HomeController } from './home/home.controller';
import { NavigationController } from './components/navbar/navigation.controller';

declare var moment: moment.MomentStatic;

module pyreBlog {
	'use strict';

	angular.module('pyreBlog', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr'])

	// Constants
	.constant('moment', moment)

	// Config
	.config(config)
	.config(routerConfig)
	.run(runBlock)

	// Services

	// Controllers
	.controller('HomeController', HomeController)
	.controller('NavigationController', NavigationController);
}
