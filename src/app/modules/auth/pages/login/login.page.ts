import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../services/auth/auth.service';
import {AuthData} from '../../../../types/auth/types';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  showError: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  login(formData: AuthData) {
    this.showError = false;
    this.authService.login(formData)
      .pipe(
        tap(
          () => {
            this.router.navigate(['/home']);
          },
          () => {
            this.showError = true;
          }
        )
      )
      .subscribe();
  }

}
