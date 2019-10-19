import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { IndexPage } from './pages/index/index.page';
import {UsersRoutesModule} from './users.routes.module';
import {UiModule} from '../ui/ui.module';

@NgModule({
  declarations: [
    IndexPage
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutesModule,
    UiModule,
  ]
})
export class UsersModule {
}
