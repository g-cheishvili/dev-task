import {RouterModule, Routes} from '@angular/router';
import {LoginPage} from './pages/login/login.page';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutesModule {
  
}
