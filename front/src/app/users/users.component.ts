import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Observable, Subject } from 'rxjs';
import { User } from '../model/user';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  list$: Subject<User[]> = this.userService.list$;
  columns: any[] = [];

  constructor(
    private userService: UserService,
    private config: ConfigService
  ) {
    this.columns = this.config.userColumns;
  }

  ngOnInit() {
    this.userService.get();
  }

  getNamePart(name, key): string {
    return name[key];
  }

  delete(user: User) {
    this.userService.delete(user).subscribe(
      response => console.log(response)
    );
  }

}
