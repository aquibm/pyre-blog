export interface IFirebaseGatewayService {
	getSyncedObject(path: string): AngularFireObject;
	getReference(): Firebase;
}

export class FirebaseGatewayService {
	'use strict';

	private firebaseUri: string;

	/* @ngInject */
	constructor(private Firebase: FirebaseStatic, private $firebaseObject: AngularFireObjectService) {
		this.firebaseUri = 'http:://pyre.firebaseio.com/';
	}

	public getReference(): Firebase {
		return new Firebase(this.firebaseUri);
	}

	public getSyncedObject(path: string): AngularFireObject {
		var ref = new Firebase(this.firebaseUri + path);
		return this.$firebaseObject(ref);
	}
}