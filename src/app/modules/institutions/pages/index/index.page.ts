import {Component, OnDestroy, OnInit} from '@angular/core';
import {InstitutionsService} from '../../../../services/institutions/institutions.service';
import {map, tap} from 'rxjs/operators';
import {Observable, Subscription} from 'rxjs';
import {Institution} from '../../../../types/institutions/types';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})
export class IndexPage implements OnInit, OnDestroy {
  institutions: Observable<Institution[]>;
  institutionSearchSubscription: Subscription;

  constructor(
    private institutionService: InstitutionsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.institutions = this.institutionService
      .search()
      .pipe(
        map(res => res.data)
      );
  }

  ngOnInit() {
    this.activatedRoute.data
      .pipe(
        tap(r => console.log(r))
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    if (this.institutionSearchSubscription) {
      this.institutionSearchSubscription.unsubscribe();
    }
  }

}
