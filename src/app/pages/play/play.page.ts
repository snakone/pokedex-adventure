import { Component } from '@angular/core';
import { CrafterService } from '@core/services/crafter.service';
import { ShareRollsComponent } from '@shared/components/modals/share-rolls/share-rolls.component';
import { LOCATION_MENU } from '@shared/data/menu';

import { DUMMY_POKEDEX } from '@shared/dummy/pokemon.dummy';
import { LocationChange } from '@shared/interfaces/menu.interface';
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

  constructor(private crafter: CrafterService) {}

  ionViewDidEnter() {
    this.reset(true);
  }

  public doRoll(): void {
    if (this.rolls <= 0) { return; }

    this.playing = true;
    this.show = false;
    this.rolls--;

    this.pokemon = this.searchPokemon();

    setTimeout(() => this.show = true, 100);

    setTimeout(() => {
      new Audio('assets/sounds/' + 
                this.pokemon.name.toLowerCase() + 
                '.ogg').play();
      this.playing = false;
    }, 666);
  }

  private searchPokemon(): Pokemon {
    const random = Math.round((Math.random() * 1000));
    const pokemon = this.closest(random, this.location.list);
    pokemon.pc = Math.floor(Math.random() * 
                (pokemon.max - pokemon.min)) + pokemon.min;
    pokemon.route = this.location.name;
    this.gameList.push({...pokemon});
    return pokemon;
  }

  private closest(
    random: number, 
    list: Pokemon[]
  ): Pokemon {
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
    if (this.location.name === change.location) { return; }

    this.region = change.menu?.name || 'Kanto';
    this.reset(true);
    this.location = this.pokedex
                     .filter(p => p.region === this.region)
                     .map(p => p.locations)[0]
                     .filter(loc => loc.name === change.location)[0];

    setTimeout(async () => {
      (await 
        this.crafter.alert(
          'Location changed to: ' + this.location.name
      )).present();
    }, 400);
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
    this.crafter.modal(ShareRollsComponent, {list: this.gameList});
  }

}
