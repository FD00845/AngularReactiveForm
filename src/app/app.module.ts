import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ReCAPTCHAComponent } from './re-captcha/re-captcha.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RecaptchaModule,
        RecaptchaFormsModule,
    ],
    providers: [
        {
          provide: RECAPTCHA_SETTINGS,
          useValue: {
            siteKey: environment.recaptcha.siteKey,
          } as RecaptchaSettings,
        },
      ],
    declarations: [
        AppComponent,
        ReCAPTCHAComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }