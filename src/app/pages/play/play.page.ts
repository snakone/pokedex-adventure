import { Component, OnInit } from '@angular/core';
import { DUMMY_POKEMON } from 'src/app/shared/dummy/pokemon.dummy';
import { Pokemon } from 'src/app/shared/interfaces/pokemon.interface';

@Component({
  selector: 'pokedex-play',
  templateUrl: 'play.page.html',
  styleUrls: ['play.page.scss']
})

export class PlayPage implements OnInit {

  current: Pokemon;
  pokeList = DUMMY_POKEMON;
  show = false;
  rolls = 10;
  playing = false;
  gameList: Pokemon[] = [];

  constructor() {}

  ngOnInit() { }

  public doRoll(): void {
    this.playing = true;
    if (this.rolls <= 0) { return; }
    this.show = false;
    this.rolls--;
    const random = Math.round((Math.random() * 1000));
    this.current = this.closest(random, this.pokeList);
    this.gameList.push(this.current);
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
            return (bDiff < aDiff && random <= b.rate) ? b : a;
        }
    });
  }

  public reset(): void {
    this.rolls = 10;
    this.show = false;
    this.current = undefined;
    this.gameList = [];
  }

  public share(): void {
    console.log(this.gameList.map(p => p.name));
  }

}
