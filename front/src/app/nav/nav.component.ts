import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  links: {title: string, url: string}[] = [
    {title: 'Home', url: '/'},
    {title: 'Users', url: '/users'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
