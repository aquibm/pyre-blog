export function pyreLazyLoad() {
	return {
		restrict: 'A',
		link: (scope: ng.IScope, element: any, attrs: any) => {
			var img = new Image();
			img.setAttribute('data-src', '');
			$(img).insertAfter(element);
			img.onload = () => {
				img.removeAttribute('data-src');
			};
			img.src = attrs.pyreLazyLoad;
		}
	};
}