import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../model/user';
import { combineLatest, Observable } from 'rxjs';
import { ConfigService } from '../../service/config.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: any = {};
  columns: any = [];

  constructor(
    private config: ConfigService,
    private userService: UserService
  ) {
    this.columns = this.config.userColumns;
  }

  ngOnInit() {
    //
  }

  create(user: User) {
    this.userService.create(user).forEach(
      response => console.log(response)
    );
  }

  createSubKey(user: User, key: string) {
    if (!user[key]) {
      user[key] = {};
    }
    return user;
  }

}
