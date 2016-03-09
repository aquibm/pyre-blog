import { ISettingsService } from '../../integration/settings.service';

export interface IPyreBlogSettings extends AngularFireObject {
	blogTitle: string;
	blogSummary: string;
}

export class BlogSettingsController {

	public blogTitle: string;
	public blogSummary: string;
	private blogSettings: IPyreBlogSettings;

	/* @ngInject */
	constructor(private settingsService: ISettingsService, private toastr: angular.toastr.IToastrService) {
		this.settingsService.getSettings().$loaded((response: IPyreBlogSettings) => {
			this.blogTitle = response.blogTitle;
			this.blogSummary = response.blogSummary;

			this.blogSettings = response;
		});
	}

	public saveSettings(): void {
		this.blogSettings.blogTitle = this.blogTitle;
		this.blogSettings.blogSummary = this.blogSummary;

		this.blogSettings.$save().then(() => {
			this.toastr.info('Saved blog settings.');
		});
	}
}