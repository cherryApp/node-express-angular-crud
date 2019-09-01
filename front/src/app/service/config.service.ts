import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  userColumns: {key: string, title: string}[] = [
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

  constructor() { }
}
