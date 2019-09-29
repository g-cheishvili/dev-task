import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {API_BASE, TOKEN_KEY} from './tokens';
import {environment} from '../environments/environment';
import {SharedModule} from './modules/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainLayout } from './layouts/main/main.layout';
import { HomeComponent } from './pages/home/home.component';
import {AppRoutesModule} from './app.routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UiModule} from './modules/ui/ui.module';
import { EmptyLayout } from './layouts/empty/empty.layout';

@NgModule({
  declarations: [
    AppComponent,
    MainLayout,
    HomeComponent,
    EmptyLayout,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutesModule,
    BrowserAnimationsModule,
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
