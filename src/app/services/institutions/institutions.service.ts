import {Inject, Injectable} from '@angular/core';
import {API_BASE} from '../../tokens';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Institution, SearchData} from '../../types/institutions/types';
import {Paginated} from '../../types/shared/types';

@Injectable({
  providedIn: 'root'
})
export class InstitutionsService {
  private baseUrl: string;
  constructor(
    @Inject(API_BASE) apiUrl: string,
    private http: HttpClient
  ) {
    this.baseUrl = `${apiUrl}/institutions`;
  }

  search(searchData: SearchData = {}) {
    const searchParams = {
      page: '1',
      ...searchData
    };
    return this.http.get<Paginated<Institution>>(`${this.baseUrl}`, {
      params: (searchParams as {[key: string]: string})
    });
  }
}
