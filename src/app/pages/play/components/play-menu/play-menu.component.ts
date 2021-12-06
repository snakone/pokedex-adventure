import { Component, EventEmitter, Output } from '@angular/core';

import { LOCATION_MENU } from '@shared/data/menu';
import { LocationChange, LocationMenu } from '@shared/interfaces/menu.interface';

@Component({
  selector: 'pokedex-play-menu',
  templateUrl: './play-menu.component.html',
  styleUrls: ['./play-menu.component.scss'],
})

export class PlayMenuComponent {

  @Output() onChangeLocation = new EventEmitter<LocationChange>();

  menu = LOCATION_MENU;

  constructor() { }

  public changeLocation(
    r: LocationMenu,
    l: string
  ): void {
    this.onChangeLocation.emit({menu: r, location: l});
  }

}
