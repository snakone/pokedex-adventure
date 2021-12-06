import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pokemon, GameLocation } from '@shared/interfaces/pokemon.interface';

@Component({
  selector: 'pokedex-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PlayGameComponent {

  @Input() pokemon: Pokemon | undefined;
  @Input() location: GameLocation | undefined;

  @Input() playing: boolean | undefined;
  @Input() show: boolean | undefined;

  constructor() { }

}
