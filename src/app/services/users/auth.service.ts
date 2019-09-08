import {Inject, Injectable} from '@angular/core';
import {API_BASE} from '../../tokens';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {User} from '../../types/users/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;
  private _token: string;
  private user: User;

  get token() {
    return this._token;
  }

  constructor(
    @Inject(API_BASE) apiUrl: string,
    private http: HttpClient
    ) {
    this.apiUrl = `${apiUrl}`;
  }

  login({email, password}): Observable<{token: string}> {
    return this.http
      .post<{token: string}>(`${this.apiUrl}/login`, {email, password})
      .pipe(
        tap(
          (response) => {
            this._token = response.token;
          }
        ),
        catchError(
          (err) => {
            console.error(err);
            return of(err);
          }
        )
      );
  }

  getUser(): Observable<User> {
    if(this.user) {
      return of(this.user);
    }
    return this.fetchUser();
  }

  fetchUser(): Observable<User> {
    return this.http
      .get<{user: User}>(`${this.apiUrl}/user`)
      .pipe(
        map(
          (userResponse: {user: User}) => userResponse.user
        ),
        tap(
          (user) => this.user = user
        )
      );
  }

}
