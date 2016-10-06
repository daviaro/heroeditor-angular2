import { Component } from '@angular/core';
import {Hero} from "./hero";

@Component({
    selector: 'hero-editor',
    /* Cambiando forma de presentar el template */
    /*template: `<h1>{{title}}</h1>
               <h2>My favorite hero is: {{myHero}}</h2>
               <p>Heroes:</p>
                <ul>
                  <li *ngFor="let hero of heroes">
                  {{ hero }}
                  </li>
                </ul>
`*/
    /*Con objetos*/
    template: `
                <h1>{{title}}</h1>
                <h2>My favorite hero is: {{myHero.name}}</h2>
                <p>Heroes:</p>
                <ul>
                  <li *ngFor="let hero of heroes">
                   {{ hero.id }} -{{ hero.name }} 
                  </li>
                </ul>
    `

})
/*
  Usando texto normal
  export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
}*/

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
}

