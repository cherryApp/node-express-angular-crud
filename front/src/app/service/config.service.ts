import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  userColumns: {key: string, subKey?: string, title: string}[] = [
    {key: 'id', title: 'ID'},
    { key: 'isActive', title: 'Active'},
    // { key: 'balance', title: 'Balance'},
    { key: 'age', title: 'Age'},
    // { key: 'eyeColor', title: 'E.color'},
    { key: 'name', subKey: 'first', title: 'FirstName'},
    { key: 'name', subKey: 'last', title: 'LastName'},
    { key: 'company', title: 'Company'},
    { key: 'email', title: 'Email'},
    // { key: 'phone', title: 'Phone'},
    { key: 'address', title: 'Address'}
  ];

  constructor() { }
}
