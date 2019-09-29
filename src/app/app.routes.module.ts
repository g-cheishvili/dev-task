import {RouterModule, Routes} from '@angular/router';
import {MainLayout} from './layouts/main/main.layout';
import {HomeComponent} from './pages/home/home.component';
import {NgModule} from '@angular/core';
import {AuthGuard} from './guards/auth.guard';
import {EmptyLayout} from './layouts/empty/empty.layout';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
    ]
  },
  {
    path: 'auth',
    component: EmptyLayout,
    children: [
      {
        path: '',
        loadChildren: './modules/auth/auth.module#AuthModule'
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule {
  
}
