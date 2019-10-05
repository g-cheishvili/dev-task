import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexPage} from './pages/index/index.page';
import {SharedModule} from '../shared/shared.module';
import {UiModule} from '../ui/ui.module';
import {InstitutionsRoutesModule} from './institutions.routes.module';

@NgModule({
  declarations: [
    IndexPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    UiModule,
    InstitutionsRoutesModule

  ]
})
export class InstitutionsModule {
}
