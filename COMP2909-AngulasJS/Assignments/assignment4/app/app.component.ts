import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:   
      `<h1>Food List</h1>
    <nav>
    <a routerLink="/home" routerLinkActive="active">Home</a> |
    <a routerLink="/about" routerLinkActive="active">About</a>
    </nav>
    <!-- Where router should display a view -->
    <router-outlet></router-outlet>`
})
export class AppComponent { }
