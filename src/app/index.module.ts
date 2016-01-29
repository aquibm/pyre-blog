/// <reference path="../../.tmp/typings/tsd.d.ts" />

// Config
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

// Services

// Controllers
import { NavigationController } from './components/navbar/navigation.controller';
import { MainController } from './main/main.controller';

// Libraries
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
		.controller('NavigationController', NavigationController)
		.controller('MainController', MainController);
}
