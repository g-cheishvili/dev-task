import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertModule} from 'ngx-bootstrap';
import {BaseListingComponent} from './components/base-listing-page/base-listing.component';
import { BaseTableComponent } from './components/base-table/base-table.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BaseListingComponent,
    BaseTableComponent
  ],
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    RouterModule.forChild([])
  ],
  exports: [
    AlertModule,
    BaseListingComponent
  ]
})
export class UiModule {
}
