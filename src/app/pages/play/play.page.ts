import { Component } from '@angular/core';
import { LOCATION_MENU } from 'src/app/shared/data/menu';
import { DUMMY_POKEDEX } from 'src/app/shared/dummy/pokemon.dummy';
import { LocationMenu } from 'src/app/shared/interfaces/menu.interface';
import { GameLocation, Pokemon } from 'src/app/shared/interfaces/pokemon.interface';

@Component({
  selector: 'pokedex-play',
  templateUrl: 'play.page.html',
  styleUrls: ['play.page.scss']
})

export class PlayPage {

  current: Pokemon;
  pokedex = DUMMY_POKEDEX;
  show = false;
  rolls = 10;
  playing = false;
  gameList: Pokemon[] = [];

  location: GameLocation = DUMMY_POKEDEX[0].locations[0];
  region = 'Kanto'

  menu = LOCATION_MENU;

  constructor() {}

  ionViewDidEnter(){
    this.reset(true);
  }

  public doRoll(): void {
    if (this.rolls <= 0) { return; }

    this.playing = true;
    this.show = false;
 
    const random = Math.round((Math.random() * 1000));

    this.current = this.closest(random, this.location.list);
    this.gameList.push(this.current);
    this.rolls--;

    setTimeout(() => this.show = true, 100);

    setTimeout(() => {
      new Audio('assets/sounds/' + 
                this.current.name.toLowerCase() + 
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

  public changeLocation(
    r: LocationMenu,
    l: { location: string }
  ): void {
    this.region = r.name;
    this.reset(true);
    this.location = this.pokedex.filter(p => p.region === r.name)
                                .map(p => p.locations)[0]
                                .filter(loc => loc.name === l.location)[0];
  }

  public reset(soft: boolean = false): void {
    if (soft) {
      this.show = false;
      this.current = undefined;
      this.playing = false;
      return;
    }

    this.show = false;
    this.current = undefined;
    this.playing = false;
    this.rolls = 10;
    this.gameList = [];
  }

  public share(): void {
    console.log(this.gameList.map(p => p.name));
  }

}
