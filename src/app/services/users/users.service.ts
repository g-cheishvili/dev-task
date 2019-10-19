import {Inject, Injectable} from '@angular/core';
import {API_BASE} from '../../tokens';
import {HttpClient} from '@angular/common/http';
import {Paginated} from '../../types/shared/types';
import {CreateUserData, UpdateUserData, User} from '../../types/users/types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly apiUrl: string;

  constructor(@Inject(API_BASE) apiUrl: string,
              private http: HttpClient,
  ) {
    this.apiUrl = `${apiUrl}/users`;
  }

  index(params: {page?: number} = {}) {
    if(!params.page) params.page = 1;
    return this.http.get<Paginated<User>>(`${this.apiUrl}`, {
      params: (params as any)
    });
  }

  create(createUserData: CreateUserData) {
    return this.http.post<User>(`${this.apiUrl}/create`, createUserData);
  }

  update(userId: number, updateUserData: UpdateUserData) {
    return this.http.put<User>(`${this.apiUrl}/${userId}`, updateUserData);
  }

  show(userId: number) {
    return this.http.get<User>(`${this.apiUrl}/${userId}`);
  }

}
