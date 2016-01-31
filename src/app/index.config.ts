/** @ngInject */
export function config($logProvider: angular.ILogProvider, toastrConfig: any, $mdThemingProvider: angular.material.IThemingProvider) {
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
