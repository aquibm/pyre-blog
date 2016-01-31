import { IFirebaseGatewayService } from '../integration/firebase.gateway.service';

export class HomeController {
	public lorem: AngularFireObject;

	/* @ngInject */
	constructor(firebaseGatewayService: IFirebaseGatewayService) {
		this.lorem = firebaseGatewayService.getSyncedObject('lorem');
	}
}