import {Inject, Injectable} from '@angular/core';
import {API_BASE} from '../../tokens';
import {HttpClient} from '@angular/common/http';
import {Institution, SearchData} from '../../types/institutions/types';
import {Paginated} from '../../types/shared/types';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService {
  private readonly baseUrl: string;

  // public replay: ReplaySubject<number> = new ReplaySubject();

  constructor(
    @Inject(API_BASE) apiUrl: string,
    private http: HttpClient
  ) {
    this.baseUrl = `${apiUrl}/institutions`;
    // let x = 0;
    // const interval = setInterval(() => {
    //   this.replay.next(x);
    //   x++;
    //   if (x === 10) {
    //     clearInterval(interval);
    //   }
    // }, 1);

  }

  search(searchData: SearchData = {}) {
    const searchParams = {
      page: '1',
      ...searchData
    };
    return this.http.get<Paginated<Institution>>(`${this.baseUrl}`, {
      params: (searchParams as { [key: string]: string })
    });
  }
}
