import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthData} from '../../../../../types/auth/types';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  email: FormControl = new FormControl('', Validators.required);
  password: FormControl = new FormControl('', Validators.required);

  @Output() submit = new EventEmitter<AuthData>();

  constructor() {
    this.form = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit() {
  }

  login() {
    if(this.form.valid) {
      this.submit.emit(this.form.value);
    }
  }
}
