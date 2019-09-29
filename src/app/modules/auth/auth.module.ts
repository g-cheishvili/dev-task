import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/forms/login/login.component';
import {AuthRoutesModule} from './auth.routes.module';
import {SharedModule} from '../shared/shared.module';
import {LoginPage} from './pages/login/login.page';
import {UiModule} from '../ui/ui.module';

@NgModule({
  declarations: [
    LoginPage,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutesModule,
    UiModule,
  ]
})
export class AuthModule { }
