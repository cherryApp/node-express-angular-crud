import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  list$: Observable<User[]> = this.userService.get();

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.get().subscribe(
      users => console.log(users),
      err => console.error(err)
    );
  }

}
