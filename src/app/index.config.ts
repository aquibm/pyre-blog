/** @ngInject */
export function config($logProvider: angular.ILogProvider, toastrConfig: angular.toastr.IToastrConfig, $mdThemingProvider: angular.material.IThemingProvider) {
	// enable log
	$logProvider.debugEnabled(true);

	// Setup Toastr
	toastrConfig.allowHtml = true;
	toastrConfig.timeOut = 3000;
	toastrConfig.positionClass = 'toast-top-right';
	toastrConfig.progressBar = true;

	// Material Theme
	$mdThemingProvider.theme('default')
		.primaryPalette('grey')
		.accentPalette('blue');
}

/* @ngInject */
export function configureMarkdown(markedProvider: any, hljs: any) {
	'use strict';

	markedProvider.setOptions({
		gfm: true,
		tables: true,
		breaks: true,
		highlight: (code: any, language: any) => {
			if(language) {
				return hljs.highlight(language, code, true).value;
			}

			return hljs.highlightAuto(code).value;
		}
	});

	markedProvider.setRenderer({
		hr: () => {
			return '<div class="pyre-md-separator"></div>';
		}
	});
}