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
  columns: {key: string, title: string}[] = [
    {key: 'id', title: 'ID'},
    { key: 'isActive', title: 'Active'},
    // { key: 'balance', title: 'Balance'},
    { key: 'age', title: 'Age'},
    // { key: 'eyeColor', title: 'E.color'},
    { key: 'name', title: 'Name'},
    { key: 'company', title: 'Company'},
    { key: 'email', title: 'Email'},
    // { key: 'phone', title: 'Phone'},
    { key: 'address', title: 'Address'}
  ];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.get().subscribe(
      users => console.log(users),
      err => console.error(err)
    );
  }

  getNamePart(name, key): string {
    return name[key];
  }

}
