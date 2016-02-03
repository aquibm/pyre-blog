import { IFirebaseGatewayService } from '../integration/firebase.gateway.service';

export interface ICredentials {
	email: string;
	password: string;
}

export interface IUserService {
	isLoggedIn(): boolean;
	authenticate(credentials: ICredentials): ng.IPromise<FirebaseAuthData>;
	unauthenticate(): void;
	getAuthData(): FirebaseAuthData;
}

export class UserService implements IUserService {
	'use strict';

	private auth: AngularFireAuth;

	/* @ngInject */
	constructor(firebaseGatewayService: IFirebaseGatewayService, $firebaseAuth: AngularFireAuthService, private _: _.LoDashStatic) {
		this.auth = $firebaseAuth(firebaseGatewayService.getReference());
	}

	public authenticate(credentials: ICredentials): ng.IPromise<FirebaseAuthData> {
		return this.auth.$authWithPassword(credentials);
	}

	public getAuthData(): FirebaseAuthData {
		return this.auth.$getAuth();
	}

	public unauthenticate(): void {
		this.auth.$unauth();
	}

	public isLoggedIn(): boolean {
		return !_.isNull(this.auth.$getAuth());
	}
}