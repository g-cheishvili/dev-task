import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexPage} from './pages/index/index.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    component: IndexPage,
    data: {
      permissions: [
        'can_read_institutions'
      ]
    }
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
export class InstitutionsRoutesModule { }
