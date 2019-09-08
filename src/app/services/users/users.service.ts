import {Inject, Injectable} from '@angular/core';
import {API_BASE} from '../../tokens';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string;

  constructor(@Inject(API_BASE) apiUrl: string) {
    this.apiUrl = `${apiUrl}/users`;
  }
}
