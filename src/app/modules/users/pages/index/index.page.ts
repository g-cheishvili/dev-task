import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../../services/users/users.service';

@Component({
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss']
})
export class IndexPage implements OnInit {
  columns: string[] = [
    'id',
    'name',
    'email',
  ];
  config = {

  };

  constructor(public userService: UsersService) {
  }

  ngOnInit() {

  }

}
