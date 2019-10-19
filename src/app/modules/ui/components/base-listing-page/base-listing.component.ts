import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Paginated} from '../../../../types/shared/types';
import {tap} from 'rxjs/operators';
import {AuthService} from '../../../../services/auth/auth.service';

@Component({
  selector: 'ui-base-listing',
  templateUrl: './base-listing.component.html',
  styleUrls: ['./base-listing.component.scss']
})
export class BaseListingComponent implements OnInit, OnDestroy {

  _params: {[key: string]: any} = {
    page: 1
  };

  get params() {
    return this._params;
  }
  @Input() set params(value: {[key: string]: any}) {
    this._params = {
      ...this._params,
      value
    }
  }
  @Input() service: {index: (searchParams: any) => Observable<Paginated<any>>};
  @Input() columns: string[] = [];
  @Input() config = {};

  @Input() canCreatePermission: string;
  @Input() createRoute: string;

  data: any[];
  searchSubscription: Subscription;

  canCreate: boolean;


  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.searchSubscription = this.service.index(this.params)
      .pipe(
        tap(
          ({data}) => this.data = data
        ),
        tap(
          () => {
            console.log(this.data)
          }
        )
      )
      .subscribe();
    this.canCreate = this.canCreatePermission && this.authService.hasPermissionTo(this.canCreatePermission);
  }

  ngOnDestroy(): void {
    if(this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

}
