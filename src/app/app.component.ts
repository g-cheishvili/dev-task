import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './services/users/auth.service';
import {catchError, flatMap, tap} from 'rxjs/operators';
import {User} from './types/users/types';
import {of} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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

  isAuthorized: boolean = false;

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

  ngOnInit(): void {
    this.authService
      .getUser()
      .pipe(
        tap(
          (user) => {
            this.user = user;
            this.isAuthorized = true;
          }
        ),
        catchError(
          (err) => {
            this.isAuthorized = false;
            return of(err);
          }
        )
      )
      .subscribe()
  }

}
