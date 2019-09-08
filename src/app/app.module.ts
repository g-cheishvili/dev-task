import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {API_BASE, TOKEN_KEY} from './tokens';
import {environment} from '../environments/environment';
import {SharedModule} from './modules/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    {
      provide: API_BASE,
      useValue: environment.server.apiEndpoint
    },
    {
      provide: TOKEN_KEY,
      useValue: environment.storageKeys.token
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
