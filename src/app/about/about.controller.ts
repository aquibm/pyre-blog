export interface IPyreAboutData extends AngularFireSimpleObject {
	title: string;
	content: string;
	lastModified: Date;
}

export class AboutController {
	'use strict';

	/* @ngInject */
	constructor(public aboutData: IPyreAboutData) { }
}