import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES)
    this.MessageService.add('HeroesService: fetched heroes')
    return heroes;
  }

  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    this.MessageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero);
  }

  constructor(private MessageService : MessageService) { }
}
