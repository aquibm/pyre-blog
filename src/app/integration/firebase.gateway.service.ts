export interface IFirebaseGatewayService {

}

export class FirebaseGatewayService {
	'use strict';

	/* @ngInject */
	constructor(private Firebase: Firebase, private $firebaseObject: AngularFireObjectService) {
		
	}
}