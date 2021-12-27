import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.css'],
})
export class NavbarHeaderComponent implements OnInit {
  mainMenu: {
    defaultOptions: Array<any>;
  } = { defaultOptions: [] };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-home',
        router: ['/', ''],
      },
      {
        name: 'Premiere',
        icon: 'uil uil-star',
        router: ['/', 'premiere'],
      },
      {
        name: 'Movies',
        icon: 'uil uil-film',
        router: ['/', 'movies'],
      },
    ];
  }
}
