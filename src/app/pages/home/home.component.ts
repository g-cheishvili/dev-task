import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hasPermissionTo: (permission: string) => boolean;

  constructor(
    private authService: AuthService
  ) {
    this.hasPermissionTo = authService.hasPermissionTo;
  }

  ngOnInit() {
  }

}
