import { Component } from '@angular/core';
import { LOCATION_MENU } from '@shared/data/menu';

import { DUMMY_POKEDEX } from '@shared/dummy/pokemon.dummy';
import { LocationChange, LocationMenu } from '@shared/interfaces/menu.interface';
import { GameLocation, Pokemon } from '@shared/interfaces/pokemon.interface';

@Component({
  selector: 'pokedex-play',
  templateUrl: 'play.page.html',
  styleUrls: ['play.page.scss']
})

export class PlayPage {

  pokemon: Pokemon;
  pokedex = DUMMY_POKEDEX;
  show = false;
  playing = false;
  rolls = 10;
  pokeballs = 25;
  gameList: Pokemon[] = [];

  menu = LOCATION_MENU;

  location: GameLocation = DUMMY_POKEDEX[0].locations[0];
  region = 'Kanto'
  runaway = new Audio('assets/sounds/runaway.ogg');

  constructor() {}

  ionViewDidEnter(){
    this.reset(true);
  }

  public doRoll(): void {
    if (this.rolls <= 0) { return; }

    this.playing = true;
    this.show = false;
 
    const random = Math.round((Math.random() * 1000));

    this.pokemon = this.closest(random, this.location.list);
    this.pokemon.pc = Math.floor(Math.random() * 
                     (this.pokemon.max - this.pokemon.min)) + this.pokemon.min;
    this.gameList.push(this.pokemon);
    this.rolls--;

    setTimeout(() => this.show = true, 100);

    setTimeout(() => {
      new Audio('assets/sounds/' + 
                this.pokemon.name.toLowerCase() + 
                '.ogg')
          .play();
      this.playing = false;
    }, 666);
  }

  private closest(random: number, list: Pokemon[]): Pokemon {
    return list.reduce((a, b) => {
        let aDiff = Math.abs(a.rate - random);
        let bDiff = Math.abs(b.rate - random);

        if (aDiff == bDiff) {
            return a.rate > b.rate ? a : b;
        } else {
            return random >= a.rate ? b : 
              (bDiff < aDiff && random <= b.rate ? b : a);
        }
    });
  }

  public changeLocation(change: LocationChange): void {
    this.region = change.menu.name;
    this.reset(true);
    this.location = this.pokedex.filter(p => p.region === change.menu.name)
                                .map(p => p.locations)[0]
                                .filter(loc => loc.name === change.location)[0];
  }

  public doPokeball(): void {
    if (this.pokeballs <= 0) { return; }
    this.pokeballs--;
  }

  public reset(soft: boolean = false): void {
    if (soft) {
      this.show = false;
      this.pokemon = undefined;
      this.playing = false;
      return;
    }

    this.runaway.play();
    this.show = false;
    this.pokemon = undefined;
    this.playing = false;
    this.rolls = 10;
    this.pokeballs = 25;
    this.gameList = [];
  }

  public share(): void {
    console.log(this.gameList);
  }

}
