import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TranslateService],
})
export class AppComponent {
  title = 'MyTask';
  langs = [
    { key: 'en', lang: 'english' },
    { key: 'am', lang: 'amaric' },
  ];
  LangID = 'en';

  constructor(private translate: TranslateService) {
    // translate.setDefaultLang('en');
  }

  Lang;

  ngOnInit(): void {
    if (environment.production) {
      this.Lang = window['lang'];
      console.log('Lang', this.Lang);
      if (this.Lang == 'am-ET' || this.Lang == 'am-et') {
        this.translate.setDefaultLang('am');
        environment.Lang = '2C2EBBEA-3361-E111-95D5-00E04C05559B';
        // this.translate.use('am');
      } else {
        this.translate.setDefaultLang('en');
        environment.Lang = '10D04E8B-3361-E111-95D5-00E04C05559B';
        // this.translate.use('en');
      }
    } else {
      this.Lang = '';
      this.translate.setDefaultLang('en');
      environment.Lang = '10D04E8B-3361-E111-95D5-00E04C05559B';
      //environment.Lang = '2C2EBBEA-3361-E111-95D5-00E04C05559B';
      //this.translate.use('am');
    }
  }
}
