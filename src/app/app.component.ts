import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './services/users/auth.service';
import {flatMap, tap} from 'rxjs/operators';
import {User} from './types/users/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loginForm: FormGroup;
  email: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    Validators.email
  ]));
  password: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(36),
  ]));

  user: User;

  loading: boolean = false;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  login() {
    if(this.loginForm.valid) {
      this.loading = true;
      this.authService
        .login(this.loginForm.value)
        .pipe(
          flatMap(
            () => this.authService.getUser()
          ),
          tap(
            (user) => this.user = user
          ),
          tap(
            () => this.loading = false
          )
        )
        .subscribe();
    }
    console.log(this.loginForm);
  }

}
