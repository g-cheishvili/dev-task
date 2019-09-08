import {Inject, Injectable} from '@angular/core';
import {API_BASE, TOKEN_KEY} from '../../tokens';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {User} from '../../types/users/types';
import {LocalStorageService} from '../shared/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string;
  private tokenKey: string;
  private user: User;

  private set token(value: string) {
    this.localStorageService.set(this.tokenKey, value);
  }

  private get token(): string | null {
    return this.localStorageService.get(this.tokenKey) as string;
  }

  constructor(
    @Inject(API_BASE) apiUrl: string,
    @Inject(TOKEN_KEY) tokenKey: string,
    private http: HttpClient,
    private localStorageService: LocalStorageService
    ) {
    this.apiUrl = `${apiUrl}`;
    this.tokenKey = tokenKey;
  }

  getToken() {
    return this.token;
  }

  login({email, password}): Observable<{token: string}> {
    return this.http
      .post<{token: string}>(`${this.apiUrl}/login`, {email, password})
      .pipe(
        tap(
          (response) => {
            this.token = response.token;
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
