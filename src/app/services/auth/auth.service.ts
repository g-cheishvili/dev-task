import {Inject, Injectable} from '@angular/core';
import {API_BASE, TOKEN_KEY} from '../../tokens';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {User} from '../../types/users/types';
import {LocalStorageService} from '../shared/local-storage.service';
import {AuthData, AuthReponse} from '../../types/auth/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;

  private set token(value: string) {
    this.localStorageService.set(this.tokenKey, value);
  }

  private get token(): string | null {
    return this.localStorageService.get(this.tokenKey) as string;
  }

  constructor(
    @Inject(API_BASE) private apiUrl: string,
    @Inject(TOKEN_KEY) private tokenKey: string,
    private http: HttpClient,
    private localStorageService: LocalStorageService
    ) {
  }

  getToken() {
    return this.token;
  }

  clearToken() {
    this.token = '';
  }

  login(formData: AuthData): Observable<AuthReponse> {
    return this.http
      .post<AuthReponse>(`${this.apiUrl}/login`, formData)
      .pipe(
        tap(
          (response) => {
            this.token = response.token;
          }
        ),
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
