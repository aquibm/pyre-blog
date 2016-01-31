import { IFirebaseGatewayService } from './firebase.gateway.service';

export interface ISettingsService {
	getSettings(): AngularFireObject;
	primeSettings(): ng.IPromise<AngularFireObject>;
}

export class SettingsService implements ISettingsService {

	public settings: AngularFireObject;

	/* @ngInject */
	constructor(private firebaseGatewayService: IFirebaseGatewayService, private $q: ng.IQService) { }

	public primeSettings(): ng.IPromise<AngularFireObject> {
		return this.firebaseGatewayService.getSyncedObject('settings').$loaded();
	}

	public getSettings(): AngularFireObject {
		return this.firebaseGatewayService.getSyncedObject('settings');
	}
}