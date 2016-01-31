export interface IFirebaseGatewayService {
	getSyncedObject(path: string): AngularFireObject;
}

export class FirebaseGatewayService {
	'use strict';

	private firebaseUri: string;

	/* @ngInject */
	constructor(private Firebase: Firebase, private $firebaseObject: AngularFireObjectService) {
		this.firebaseUri = 'http:://pyre.firebaseio.com/';
	}

	public getSyncedObject(path: string): AngularFireObject {
		var ref = new Firebase(this.firebaseUri + path);
		return this.$firebaseObject(ref);
	}
}