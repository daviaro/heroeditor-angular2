import { Component } from '@angular/core';
import {Hero} from "./hero";

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

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
    /*template: `
                <h1>{{title}}</h1>
                <h2>My favorite hero is: {{myHero.name}}</h2>
                <p>Heroes:</p>
                <ul>
                  <li *ngFor="let hero of heroes">
                   {{ hero.id }} -{{ hero.name }}
                  </li>
                </ul>
    `*/

  /*template: `
                <h1>{{title}}</h1>
                <h2>My favorite hero is: {{myHero.name}}</h2>
                <p>Heroes:</p>
                <ul>
                  <li *ngFor="let hero of heroes">
                   {{ hero.id }} -{{ hero.name }}
                  </li>
                </ul>
    `*/

    template:`
            <h2>My Heroes</h2>
              <ul class="heroes">
              <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
                <span class="badge">{{hero.id}}</span> {{hero.name}}
              </li>
            </ul>
    `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]


})
/*
  Usando texto normal
  export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
}*/

/*
* Usando Objetos
* title = 'Tour of Heroes';
 heroes = [
 new Hero(1, 'Windstorm'),
 new Hero(13, 'Bombasto'),
 new Hero(15, 'Magneta'),
 new Hero(20, 'Tornado')
 ];
 myHero = this.heroes[0];
* */



export class AppComponent {

  title = 'Tour of Heroes';
  heroes = HEROES;
  /*Se crea la variable selectedHero*/
  selectedHero: Hero;

}

