/**
 * Created by fisbii on 17-9-6.
 */
import { Component,OnInit } from '@angular/core';

import { HeroService } from './hero.service';
import {Hero} from "./Hero";


@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
