import {Component, OnDestroy, OnInit} from '@angular/core';
import {InstitutionsService} from '../../../../services/institutions/institutions.service';
import {tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})
export class IndexPage implements OnInit, OnDestroy {

  instutionSearchSubscription: Subscription;

  constructor(
    private institutionService: InstitutionsService
  ) {
  }

  ngOnInit() {
    this.instutionSearchSubscription = this.institutionService
      .search()
      .pipe(
        tap(res => {

        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.instutionSearchSubscription) {
      this.instutionSearchSubscription.unsubscribe();
    }
  }

}
